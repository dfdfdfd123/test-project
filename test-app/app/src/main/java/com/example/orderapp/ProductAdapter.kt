package com.example.orderapp

import Product
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.CheckBox
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.example.orderapp.databinding.ItemProductBinding

class ProductAdapter(private val items: List<Product>) :
    RecyclerView.Adapter<ProductAdapter.ProductViewHolder>() {

    inner class ProductViewHolder(val binding: ItemProductBinding) : RecyclerView.ViewHolder(binding.root) {
        fun bind(item: Product) {
            binding.checkboxSelect.isChecked = item.isChecked
            binding.imgProduct.setImageResource(item.imageResId)
            binding.txtCode.text = item.code
            binding.txtName.text = item.name
            binding.txtSpec.text = item.spec
            binding.txtCount.text = item.count.toString()
            binding.txtPrice.text = String.format("%,d원", item.price)

            // 수량 조절
            binding.btnPlus.setOnClickListener {
                item.count++
                binding.txtCount.text = item.count.toString()
            }

            binding.btnMinus.setOnClickListener {
                if (item.count > 1) {
                    item.count--
                    binding.txtCount.text = item.count.toString()
                }
            }

            // 체크박스 상태 갱신
            binding.checkboxSelect.setOnCheckedChangeListener { _, isChecked ->
                item.isChecked = isChecked
            }

            // 담기 버튼 클릭 시
            binding.btnAdd.setOnClickListener {
                Toast.makeText(binding.root.context, "${item.name} 담김", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ProductViewHolder {
        val binding = ItemProductBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ProductViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ProductViewHolder, position: Int) {
        holder.bind(items[position])
    }

    override fun getItemCount(): Int = items.size
}


//class ProductAdapter(
//    private val productList: List<Product>,
//    private val onQuantityChanged: (position: Int, newQuantity: Int) -> Unit,
//    private val onAddClicked: (position: Int) -> Unit
//) : RecyclerView.Adapter<ProductAdapter.ProductViewHolder>() {
//
//    inner class ProductViewHolder(val view: View) : RecyclerView.ViewHolder(view) {
//        val checkbox = view.findViewById<CheckBox>(R.id.checkbox_select)
//        val imgProduct = view.findViewById<ImageView>(R.id.img_product)
//        val txtCode = view.findViewById<TextView>(R.id.txt_code)
//        val txtName = view.findViewById<TextView>(R.id.txt_name)
//        val txtPrice = view.findViewById<TextView>(R.id.txt_price)
//        val txtCount = view.findViewById<TextView>(R.id.txt_count)
//        val btnMinus = view.findViewById<Button>(R.id.btn_minus)
//        val btnPlus = view.findViewById<Button>(R.id.btn_plus)
//        val btnAdd = view.findViewById<Button>(R.id.btn_add)
//        val txtSpec = view.findViewById<TextView>(R.id.txt_spec) // 규격 텍스트뷰가 있다면
//    }
//
//    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ProductViewHolder {
//        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_product, parent, false)
//        return ProductViewHolder(view)
//    }
//
//    override fun onBindViewHolder(holder: ProductViewHolder, position: Int) {
//        val product = productList[position]
//
//        holder.checkbox.isChecked = product.isSelected
//        holder.imgProduct.setImageResource(product.imageResId)
//        holder.txtCode.text = product.code
//        holder.txtName.text = product.name
//        holder.txtCount.text = product.quantity.toString()
//        holder.txtPrice.text = String.format("%,d원", product.price)
//        holder.txtSpec?.text = "규격 ${product.spec}"
//
//        holder.checkbox.setOnCheckedChangeListener { _, isChecked ->
//            product.isSelected = isChecked
//        }
//
//        holder.btnMinus.setOnClickListener {
//            if (product.quantity > 1) {
//                product.quantity--
//                notifyItemChanged(position)
//                onQuantityChanged(position, product.quantity)
//            }
//        }
//
//        holder.btnPlus.setOnClickListener {
//            product.quantity++
//            notifyItemChanged(position)
//            onQuantityChanged(position, product.quantity)
//        }
//
//        holder.btnAdd.setOnClickListener {
//            onAddClicked(position)
//        }
//    }
//
//    override fun getItemCount(): Int = productList.size
//}
