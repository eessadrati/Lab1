package com.essadrati.springbackend

import com.essadrati.springbackend.dao.CategoryRepository
import com.essadrati.springbackend.dao.ProductRepository
import com.essadrati.springbackend.data.Category
import com.essadrati.springbackend.data.Product
import net.bytebuddy.utility.RandomString
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import java.util.*


@SpringBootApplication
open class SpringBackendApplication: CommandLineRunner {

    @Autowired
    var productRepository: ProductRepository? = null

    @Autowired
    var categoryRepository: CategoryRepository? = null

    override fun run(vararg args: String?) {
        categoryRepository!!.save(Category(null, "Computers", "", null))
        categoryRepository!!.save(Category(null, "Printers", "", null))
        categoryRepository!!.save(Category(null, "Smartphones", "", null))
        val rand = Random()
        categoryRepository!!.findAll().forEach { category ->
            for (i in 0..9) {
                val p = Product()
                p.name = RandomString.make(10)
                p.currentPrice = (100 + rand.nextInt(10000)).toDouble()
                p.available = rand.nextBoolean()
                p.promotion = rand.nextBoolean()
                p.selected = rand.nextBoolean()
                p.category = category
                p.photoname = "unknown.png"
                productRepository!!.save(p)
            }
        }
    }

    @Bean
    fun corsFilter(): CorsFilter? {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
      //  config.allowCredentials = true
        config.allowedOrigins = Collections.singletonList("*")
        config.allowedHeaders = listOf("Origin", "Content-Type", "Accept")
        config.allowedMethods = listOf("GET", "POST", "PUT", "DELETE", "OPTIONS")
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }

}

fun main(args: Array<String>) {
    runApplication<SpringBackendApplication>(*args)
}
