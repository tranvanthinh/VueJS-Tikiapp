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
                                    <th>Ảnh đại diện</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody id="datarow">
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="/img/Product-details/product_details-0.png" class="hinhdaidien" width="80px">
                                    </td>
                                    <td>Chuối Laba Lâm Đồng Trợ Giá Tận Vườn (1Kg)</td>
                                    <td class="text-right">2</td>
                                    <td class="text-right">19000</td>
                                    <td class="text-right">38000</td>
                                    <td>
                                        <!-- Nút xóa, bấm vào sẽ xóa thông tin dựa vào khóa chính `sp_ma` -->
                                        <a id="delete_1" data-sp-ma="2" class="btn btn-danger btn-delete-sanpham">
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
        <Foodter />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Foodter from '@/components/Foodter.vue'

export default {
  name: 'Home',
  components: {
      Header,
      Foodter
  }
}
</script>