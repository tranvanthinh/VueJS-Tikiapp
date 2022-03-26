<template>
    <div class="header">
        <!-- header-tiki -->
        <div class="container">
            <div class="content-header">
                <div class="logo">  
                        <router-link to="/">
                            <img src="/img/app/logo-tiki.png" alt="">
                        </router-link> 
                              
                </div>
                <div class="searchRoot">
                    <div class="Root">
                        <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...">
                        <div class="search">
                            <router-link to="">
                                <img src="/img/app/search.png" alt="">
                                <div class="search-text" title="Tìm kiếm">Tìm kiếm</div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="account">
                    <div class="accountHide">
                        <router-link to="/user">
                            <img src="/img/app/account.png" alt="">
                            <div class="login-T">
                                <span class="login">Đăng nhập</span>
                                <span>/</span>
                                <span class="register">Đăng kí</span>
                                <div class="account-T">
                                    <span class="">Tài khoản</span>
                                </div>
                            </div>
                        </router-link>
                    </div>                
                </div>
                <div class="cart">
                    <router-link to="/cart">
                        <img src="/img/app/cart.png" alt="">
                        <span class="qty-T">0</span>
                        <span class="cart-T">Giỏ hàng</span>
                    </router-link>
                    
                </div>
            </div>
        </div>  
        <!-- header-tiki -->

        <!-- header-freeship -->
        <div class="container-freeship">
            <div class="content-header">
                <div class="logo-freeship">
                    <router-link to="">
                        <img src="/img/app/freeship.png" alt="">
                    </router-link>
                </div>
                <div class="food-list">
                    <router-link to="">tất cả thịt rau củ</router-link>
                    <router-link to="">thịt</router-link>
                    <router-link to="">hàng đông lạnh</router-link>
                    <router-link to="">trái cây</router-link>
                    <router-link to="">hải sản</router-link>
                    <router-link to="">gạo</router-link>
                </div>
                <div class="tiki-promotion">
                    <router-link to="" class="tiki-saler">
                        <span class="text">Bán Hàng cùng Tiki</span>
                    </router-link> 
                </div>
            </div>  
        </div>
        <!-- header-freeship -->
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>