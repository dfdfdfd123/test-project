package com.example.orderapp

import Product
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.orderapp.databinding.ActivityProjectSelectBinding

class ProjectSelect : AppCompatActivity() {

    private lateinit var binding: ActivityProjectSelectBinding
    private lateinit var adapter: ProductAdapter
    private val productList = mutableListOf<Product>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityProjectSelectBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // 샘플(더미) 데이터 추가
        productList.add(
            Product("a1231", "볼트", "규격 120c", 20000, R.drawable.bolt, 1, false)
        )
        productList.add(
            Product("b1011", "배터리", "규격 5kg", 40000, R.drawable.battery, 3, true)
        )
        productList.add(
            Product("c222", "볼트", "규격 120c", 20000, R.drawable.bolt, 1, true)
        )

        adapter = ProductAdapter(productList)
        binding.recyclerProducts.layoutManager = LinearLayoutManager(this)
        binding.recyclerProducts.adapter = adapter
    }
}


//class ProjectSelect : AppCompatActivity() {
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        enableEdgeToEdge()
//        setContentView(R.layout.activity_project_select)
//        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
//            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
//            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
//            insets
//        }
//    }
//}