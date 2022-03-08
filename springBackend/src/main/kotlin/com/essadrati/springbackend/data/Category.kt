package com.essadrati.springbackend.data


import java.io.Serializable
import javax.persistence.*


@Entity
data class Category(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     var id: Long? = null,
     var name: String? = null,
     var description: String? = null,

    @OneToMany(mappedBy = "category")
    var products: MutableList<Product>? = mutableListOf()
): Serializable {

}