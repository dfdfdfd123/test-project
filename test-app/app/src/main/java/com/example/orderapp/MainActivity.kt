package com.example.orderapp

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.MenuInflater
import android.widget.ImageButton
import android.widget.PopupMenu
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.util.LogWriter
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.orderapp.MainActivity
import com.example.orderapp.databinding.ActivityMainBinding
import com.example.orderapp.databinding.ItemProductBinding
import com.example.orderapp.min.orderdetail.OrderDetailActivity
import com.example.orderapp.min.productselect.ProductAdapter
import com.example.orderapp.min.productselect.ProjectSelect

class MainActivity : AppCompatActivity() {

    private val binding: ActivityMainBinding by lazy {
        ActivityMainBinding.inflate(layoutInflater)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(binding.root)
        ViewCompat.setOnApplyWindowInsetsListener(binding.main) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets

        }

        // 홈/메뉴 버튼 이벤트 등록
        setupHeaderButtons()



            binding.selectbutton.setOnClickListener {
                val intent = Intent(this@MainActivity, ProjectSelect::class.java)
                startActivity(intent)
                finish()
            }

            binding.detailbutton.setOnClickListener {
                val intent = Intent(this@MainActivity, OrderDetailActivity::class.java)
                startActivity(intent)
                finish()
            }

        }

    private fun setupHeaderButtons() {
        val homeButton = findViewById<ImageButton>(R.id.home)
        val menuButton = findViewById<ImageButton>(R.id.menu)

        homeButton.setOnClickListener {
            // 홈 버튼 클릭 시 처리 (예: 메인으로 이동 등)
            Log.d("csy", "홈 버튼 클릭됨")
        }

        menuButton.setOnClickListener { v ->
            val popup = PopupMenu(this@MainActivity, v)
            val inflater: MenuInflater = popup.menuInflater
            inflater.inflate(R.menu.header_menu, popup.menu)
            popup.setOnMenuItemClickListener { item ->
                when (item.itemId) {
                    R.id.menu_order -> {
                        val intent = Intent(this@MainActivity, OrderDetailActivity::class.java)
                        startActivity(intent)
                        true
                    }
                    R.id.menu_stock -> {
                        val intent = Intent(this@MainActivity, ProductAdapter::class.java)
                        startActivity(intent)
                        true
                    }
                    else -> false
                }
            }
            popup.show()
        }
    }
    }

