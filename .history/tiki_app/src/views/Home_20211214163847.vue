<template>
<div>
    <Header />
    <div id="app">
        <div class="style-Category">
            <div class="container">
                <div class="style-SimpleSlider">
                    <router-link to="/product">Thịt, rau củ</router-link>
                    <router-link to="">Bách hoá</router-link>
                    <router-link to="">Nhà cửa</router-link>
                    <router-link to="">Thiết bị số</router-link>
                    <router-link to="">Điện thoại</router-link>
                    <router-link to="">Mẹ & bé</router-link>
                    <router-link to="">Làm đẹp</router-link>
                    <router-link to="">Gia dụng</router-link>
                    <router-link to="">Thời trang nữ</router-link>
                    <router-link to="">Thời trang nam</router-link>
                    <router-link to="">Giày nữ</router-link>
                    <router-link to="">Túi nữ</router-link>
                    <router-link to="">Giày nam</router-link>
                    <router-link to="">Túi nam</router-link>
                    <span class="next-right">
                        <img src="/img/app/next-right.png" alt="">
                    </span>
                </div>
                
            </div>
        </div>

        <!-- main -->
        <div class="main">
            <div class="container">
                <!-- banner -->
                <div class="banner">
                    <div class="banner-left">
                        <div class="images">
                            <img v-for="src in images" :src="src" :key="src">
                        </div>     
                        <router-link to="" class="next-1">
                            <img src="/img/app/next.png" alt="" @click="show">
                        </router-link>
                        <router-link to="" class="next-2">
                            <img src="/img/app/next.png" alt="" @click="show">
                        </router-link>
                        <div class="btn-radio">
                            <ul class="slick-dots">
                                <li><button class="active" @click="show"></button></li>   
                                <li><button @click="show"></button></li> 
                                <li><button @click="show"></button></li>
                                <li><button @click="show"></button></li>   
                                <li><button @click="show"></button></li> 
                                <li><button @click="show"></button></li>
                                <li><button @click="show"></button></li>   
                                <li><button @click="show"></button></li> 
                                <li><button @click="show"></button></li>
                                <li><button @click="show"></button></li>   
                                <li><button @click="show"></button></li> 
                                <li><button @click="show"></button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="banner-right">
                        <img src="/img/app/sale.png" alt="">
                    </div>
                </div>
                <!-- banner -->

                <!-- endow -->
                <div class="endow">  
                    <div class="main-endow">
                        <div class="endow-top">
                            <h2>Giá sốc</h2>
                            <span class="fa-flash flash">
                                <img src="/img/app/lightning.png" alt="">
                            </span>
                            <h2>Hôm nay</h2>
                        </div>
                        <div class="endow-bottom">
                            <div class="product product-active">
                                <router-link to="">
                                    <div class="thumbs">
                                        <img src="/img/app/pr_1.jpg" alt="">
                                        <span class="free-shipfast">
                                            <img src="/img/app/freeship-tikifast.png" alt="">
                                        </span>
                                    </div>  
                                    <div class="price">
                                        <span>9.390.000 ₫</span>
                                        <span class="deals-price">-33%</span>
                                    </div>  
                                    <div class="qty">
                                        <div class="progress"></div>
                                        <span>Sắp bán hết</span>
                                        <img src="/img/app/fire.png" alt="">
                                    </div>      
                                </router-link>
                            </div>
                            <div class="product product-active">
                                <router-link to="">
                                    <div class="thumbs">
                                        <img src="/img/app/pr_2.jpg" alt="">
                                        <span class="free-shipfast">
                                            <img src="/img/app/freeship-tikifast.png" alt="">
                                        </span>
                                    </div>  
                                    <div class="price">
                                        <span>9.390.000 ₫</span>
                                        <span class="deals-price">-33%</span>
                                    </div>  
                                    <div class="qty">
                                        <div class="progress"></div>
                                        <span>Sắp bán hết</span>
                                        <img src="/img/app/fire.png" alt="">
                                    </div>      
                                </router-link>
                            </div>
                            <div class="product product-active">
                                <a href="#">
                                    <div class="thumbs">
                                        <img src="/img/app/pr_3.jpg" alt="">
                                        <span class="free-shipfast">
                                            <img src="/img/app/freeship-tikifast.png" alt="">
                                        </span>
                                    </div>  
                                    <div class="price">
                                        <span>9.390.000 ₫</span>
                                        <span class="deals-price">-33%</span>
                                    </div>  
                                    <div class="qty">
                                        <div class="progress"></div>
                                        <span>Sắp bán hết</span>
                                        <img src="/img/app/fire.png" alt="">
                                    </div>      
                                </a>
                            </div>    
                            <div class="product product-active">
                                <a href="#">
                                    <div class="thumbs">
                                        <img src="/img/app/pr_4.jpg" alt="">
                                        <span class="free-shipfast">
                                            <img src="/img/app/freeship-tikifast.png" alt="">
                                        </span>
                                    </div>  
                                    <div class="price">
                                        <span>9.390.000 ₫</span>
                                        <span class="deals-price">-33%</span>
                                    </div>  
                                    <div class="qty">
                                        <div class="progress"></div>
                                        <span>Sắp bán hết</span>
                                        <img src="/img/app/fire.png" alt="">
                                    </div>      
                                </a>
                            </div>    
                            <div class="product product-active">
                                <a href="#">
                                    <div class="thumbs">
                                        <img src="/img/app/pr_5.jpg" alt="">
                                        <span class="free-shipfast">
                                            <img src="/img/app/freeship-tikifast.png" alt="">
                                        </span>
                                    </div>  
                                    <div class="price">
                                        <span>9.390.000 ₫</span>
                                        <span class="deals-price">-33%</span>
                                    </div>  
                                    <div class="qty">
                                        <div class="progress"></div>
                                        <span>Sắp bán hết</span>
                                        <img src="/img/app/fire.png" alt="">
                                    </div>      
                                </a>
                            </div>    
                            <div class="product product-active">
                                <a href="#">
                                    <div class="thumbs">
                                        <img src="/img/app/pr_6.jpg" alt="">
                                        <span class="free-shipfast">
                                            <img src="/img/app/freeship-tikifast.png" alt="">
                                        </span>
                                    </div>  
                                    <div class="price">
                                        <span>9.390.000 ₫</span>
                                        <span class="deals-price">-33%</span>
                                    </div>  
                                    <div class="qty">
                                        <div class="progress"></div>
                                        <span>Sắp bán hết</span>
                                        <img src="/img/app/fire.png" alt="">
                                    </div>      
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!-- endow -->

                <!-- home-brand -->
                <div class="home-brand">
                    <div class="brand-1">
                        <a href="#">
                            <img src="/img/app/tiki_now.png" alt="">
                        </a>
                    </div>
                    <div class="brand-2">
                        <a href="#">
                            <img src="/img/app/super.png" alt="">
                        </a>
                    </div>
                    <div class="brand-3">
                        <a href="#">
                            <img src="/img/app/tiki_club.png" alt="">
                        </a>
                    </div>
                  </div>
                <!-- home-brand -->

                <!-- home-qicklink -->
                <div class="home-quicklink">
                    <div class="quicklink-tab">
                        <a href="#">
                            <img src="/img/app/hunting-sale.png" alt="">
                            <span>Bí kíp săn sale</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/delicious-tiki.png" alt="">
                            <span>Đi chợ online</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/discount-code.png" alt="">
                            <span>Mã giảm giá</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/service.png" alt="">
                            <span>Dịch vụ & Tiện ích</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/tiki-now.png" alt="">
                            <span>Gói hội viên</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/tiki-clubs.png" alt="">
                            <span>Giảm đến 50%</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/tiki-cart.png" alt="">
                            <span>Hoàn tiền 15%</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/endow.png" alt="">
                            <span>Ưu đãi thanh toán</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/tiki-pro.png" alt="">
                            <span>Hẹn giao & lắp đặt</span>
                        </a>
                        <a href="#">
                            <img src="/img/app/next-face.png" alt="">
                            <span>The Next Face</span>
                        </a>
                    </div>
                </div>
                <!-- home-qicklink -->

                <!-- home-deal -->
                <div class="home-deal">
                    <div class="deal">
                        <a href="#">
                            <img src="/img/app/deal-1.png" alt="">
                        </a>
                    </div>
                    <div class="deal">
                        <a href="#">
                            <img src="/img/app/deal-2.png" alt="">
                        </a>
                    </div>
                    <div class="deal">
                        <a href="#">
                            <img src="/img/app/deal-3.png" alt="">
                        </a>
                    </div>
                    <div class="deal">
                        <a href="#">
                            <img src="/img/app/deal-4.png" alt="">
                        </a>
                    </div>
                </div>
                <!-- home-deal -->

                <!-- genuine-brand -->
                <div class="genuine-brand">
                    <div class="brand-content">
                        <div class="title-content">
                            <img src="/img/app/check.png" alt="">
                            <h2>Thương hiệu chính hãng</h2>
                        </div>
                        <a href="#" class="see-more">Xem thêm</a>
                    </div>
                    <div class="genuine">
                        <a href="#">
                            <img src="/img/app/black-friday.png" alt="">
                        </a>
                        <a href="#">
                            <img src="/img/app/thegiodidong.png" alt="">
                        </a>         
                    </div>
                </div>
                <!-- genuine-brand -->
            </div>
        </div>
        <!-- main -->
        <Foodter />
    </div>
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
    },
    data(){
        images: ['/img/app/ip13.png', '/img/app/booksale.png', '/img/app/black-friday.png']
    },
    methods: {
        show () {
        const viewer = this.$el.querySelector('.images').$viewer
        viewer.show()
      }
    }

}
</script>
