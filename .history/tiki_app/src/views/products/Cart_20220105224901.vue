<template>
    <div class="cart-info">
        <Header />
        <main role="main">
            <div class="container mt-4">
                <h1 class="text-center">Giỏ hàng</h1>
                <div class="row">
                    <div class="col col-md-12">
                        <table class="table table-bordered display-5">
                            <thead>
                                <tr style="font-size:16px;">
                                    <th>STT</th>
                                    <!-- <th>Ảnh đại diện</th> -->
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody id="datarow">
                                <tr v-for="(product, index) in products" :key="index">
                                    <td style="font-size:16px;">{{ index + 1 }}</td>
                                    <!-- <td>
                                        <img src="/img/Product-details/product_details-0.png" class="hinhdaidien" width="80px">
                                    </td> -->
                                    <td style="font-size:16px;">{{ product.name }}</td>
                                    <td class="text-center" style="font-size:16px;">{{ product.qty }}</td>
                                    <td class="text-center" style="font-size:16px;">{{ product.price }}</td>
                                    <td class="text-center" style="font-size:16px;">{{ product.total }}</td>
                                    <td>
                                        <!-- Nút xóa, bấm vào sẽ xóa thông tin dựa vào khóa chính `sp_ma` -->
                                        <a id="delete_1" data-sp-ma="2" class="btn btn-danger btn-delete-sanpham" v-on:click="onDelete(product.id)">
                                            <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <router-link to="/product/details" class="btn btn-warning btn-md float-left" ><i class="fa fa-arrow-left"
                            aria-hidden="true"></i>&nbsp;Quay về trang sản phẩm
                        </router-link>
                            
                        <router-link to="" class="btn btn-primary btn-md float-right"><i
                            class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Thanh toán
                        </router-link>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    },
    data() {
            return {
                products: []
            }
        },
    created(){
        this.getAll()
    },
    methods: {
        getAll(){
            this.$request.get('http://localhost:8000/api/products').then(res => {
                this.products = res.data
            })
        },
        onDelete(productId){
            this.$swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }
}
</script>