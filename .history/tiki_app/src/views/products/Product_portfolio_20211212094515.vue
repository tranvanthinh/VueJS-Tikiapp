<template>
    <div class="product-portfolio">
        <!-- header -->
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
                        <input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...">
                        <div class="search">
                            <a href="#">
                                <img src="/img/app/search.png" alt="">
                                <div class="search-text" title="Tìm kiếm">Tìm kiếm</div>
                            </a>
                        </div>
                    </div>
                    <div class="account">
                        <a href="#">
                            <img src="/img/app/account.png" alt="">
                            <div class="login-T">
                                <span class="login">Đăng nhập</span>
                                <span>/</span>
                                <span class="register">Đăng kí</span>
                                <div class="account-T">
                                    <span class="">Tài khoản</span>
                                    <span class="fa-caret-down"></span>
                                </div>
                                
                            </div>
                        </a>
                        <div class="create-form">
                            <div class="form-register">
                                <div class="register-T ">      
                                    <span class="fa-caret-up"></span>
                                    <h3>Xin chào</h3>  
                                    <h4>Đăng nhập hoặc Tạo tài khoản</h4>  
                                    <div class="register-phone">
                                        <input type="text" placeholder="Số điện thoại">
                                        <div class="continue">Tiếp tục</div>
                                    </div>
                                    <a href="#" class="email">Đăng nhập bằng email</a>
                                    <div class="info">
                                        <p>Hoặc tiếp tục bằng</p>
                                        <div class="internet">
                                            <img class="fb" src="/img/app/fb.png" alt="">
                                            <img class="gg" src="/img/app/gg.png" alt="">
                                            <img class="zalo" src="/img/app/zalo.png" alt="">
                                        </div>
                                        <div class="information">
                                            <small>Bằng việc tiếp tục, bạn đã chấp nhận</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="register-img">
                                    <div class="register-logo">
                                        <img src="/img/app/register.png" alt="">
                                    </div>
                                    <span>Mua sắm tại TiKi</span>
                                    <small>Siêu ưu đãi mỗi ngày</small>
                                </div>
                            </div>
                        </div>                  
                    </div>
                    <div class="cart">
                        <a href="#">
                            <img src="/img/app/cart.png" alt="">
                            <span class="qty-T">0</span>
                            <span class="cart-T">Giỏ hàng</span>
                        </a>
                        
                    </div>
                </div>
            </div>  
            <!-- header-tiki -->

            <!-- header-freeship -->
            <div class="container-freeship">
                <div class="content-header">
                    <div class="logo-freeship">
                        <a href="#">
                            <img src="/img/app/freeship.png" alt="">
                        </a>
                    </div>
                    <div class="food-list">
                        <router-link to="#">tiki ngon hcm</router-link>
                        <router-link to="#">táo</router-link>
                        <router-link to="">cá hồi</router-link>
                        <router-link to="">milo</router-link>
                        <router-link to="">pizza</router-link>
                        <router-link to="">phô mai kéo sợi</router-link>
                        <router-link to="">nho</router-link>
                        <router-link to="">xúc xích</router-link>
                        <router-link to="">khoai lang</router-link>
                        <router-link to="">pizza 4p</router-link>
                        <router-link to="">rau củ quả</router-link>
                    </div>
                    <div class="tiki-promotion">
                        <a href="#" class="tiki-saler">
                            <span class="fa-lightbulb-o"></span>
                            <span class="text">Bán Hàng cùng Tiki</span>
                        </a> 
                    </div>
                </div>  
            </div>
            <!-- header-freeship -->
        </div>
        <!-- header -->

        <!-- main -->
        <main>
            <div class="container">
                <div class="product_list_top">
                    <div class="brandcrumb">
                        <router-link to="/">
                            <span>Trang chủ</span>
                        </router-link>
                        <span class="fa-angle-right"></span>
                        <a href="#">
                            <span class="align">Thực phẩm tươi sống</span>
                        </a>
                    </div>
                </div>
                <div class="product_list_bottom">
                    <div class="ctegoryViewstyle">
                        <div class="product_left">
                            <div class="product_left--book">
                                <h2>Danh mục sản phẩm</h2>
                                <div class="list">
                                    <a href="#" class="item item--category">Rau củ quả</a>
                                    <a href="#" class="item item--catergory">Hải sản</a>
                                    <a href="#" class="item item--catergory">Thực phẩm chế biến sẵn</a>
                                    <a href="#" class="item item--catergory">Thịt</a>
                                    <a href="#" class="item item--catergory">trái cây</a>
                                    <a href="#" class="item item--catergory">Bánh kẹo</a>
                                    <a href="#" class="item item--catergory">Thực phảm đông lạnh khác</a>
                                    <a href="#" class="item item--catergory">Đồ uống - Giải khát</a>
                                    <a href="#" class="item item--catergory">Thực phẩm khô</a>
                                    <a href="#" class="item item--catergory">Gia vị & Dầu ăn</a>
                                    <a href="#" class="item item--catergory">Bơ sữa & Trứng</a>
                                    <a href="#" class="item item--catergory">Đồ hộp</a>
                                    <a href="#" class="item item--catergory">Thực phẩm cho trẻ em</a>
                                    <a href="#" class="item item--catergory">Nấu ăn và làm bánh</a>
                                    <a href="#" class="item item--catergory">Thực phẩm bổ dưỡng</a>
                                    <a href="#" class="item item--catergory">Đặc sản Việt Nam</a>
                                    <a href="#" class="item item--catergory">Thực phẩm hữu cơ</a>
                                    <a href="#" class="item item--catergory">Thực phẩm chay</a>
                                    <a href="#" class="item item--catergory">Thực phẩm bảo vệ sức khoẻ</a>
                                    <a href="#" class="item item--catergory">Thực phẩm cao cấp</a>
                                </div>
                            </div>
                            <div class="product_left--location">
                                <h2>Địa chỉ nhận hàng</h2>
                                <div class="address">Bạn muốn giao hàng tới đâu?</div>
                                <div class="address-change">Nhập địa chỉ</div>
                            </div>
                            <div class="product_left--service">
                                <h2>Dịch vụ</h2>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <div class="service-wrap">
                                        <img src="/img/Product_portfolio/tiki-now.png" alt="">
                                        <span>Giao siêu tốc 2H</span>
                                    </div>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <div class="service-wrap">
                                        <img src="/img/Product_portfolio/freeship.png" alt="">
                                        <span>Không giới hạn</span>
                                    </div>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <div class="service-wrap">
                                        <span>Rẻ hơn hoàn tiền</span>
                                    </div>
                                </label>
                            </div>
                            <div class="product_left--rating">
                                <h2>Đánh giá</h2>
                                <div class="stars start-1">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <p>từ 5 sao</p>
                                </div>
                                <div class="stars start-2">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star_none-color.png" alt="">
                                    <p>từ 4 sao</p>
                                </div>
                                <div class="stars start-3">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star.png" alt="">
                                    <img src="/img/Product_portfolio/star_none-color.png" alt="">
                                    <img src="/img/Product_portfolio/star_none-color.png" alt="">
                                    <p>từ 3 sao</p>
                                </div>
                            </div>
                            <div class="product_left--price">
                                <h2>Giá</h2>
                                <div class="fast-price">
                                    <div class="item">
                                        <span>Dưới 20.000₫</span>
                                    </div>
                                    <div class="item">
                                        <span>Từ 20.000₫ đến 60.000₫</span>
                                    </div>
                                    <div class="item">
                                        <span>Từ 60.000₫ đến 210.000₫</span>
                                    </div>
                                    <div class="item">
                                        <span>Trên 210.000₫</span>
                                    </div>
                                </div>
                                <div class="price-small-text">
                                    Chọn khoảng giá
                                </div>
                                <div class="input-group">
                                    <input type="text" placeholder="Giá từ" value="0">
                                    <span>-</span>
                                    <input type="text" placeholder="Giá đến" value="0">
                                </div>
                                <button class="">Áp dụng</button>
                            </div>
                            <div class="product_left--brand">
                                <h2>Thương hiệu</h2>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Big C</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Nestlé</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Lipton</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Cosy</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>MAGGI</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Đảo Hải Sản</span>
                                </label>
                                <div class="see-more">
                                    <a href="#">Xem thêm
                                        <span class=" fa-angle-down"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="product_left--supplier">
                                <h2>Nhà cung cấp</h2>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Big C Thăng Long</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Go! An Lạc</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Big C Long Biên</span>
                                </label>
                                <label class="style_checkbox">
                                    <input type="checkbox" name="" id="">
                                    <span>Go! Nha Trang</span>
                                </label>
                                <div class="see-more">
                                    <a href="#">Xem thêm
                                        <span class=" fa-angle-down"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="product_left--bannerZone">
                                <a href="#">
                                    <img src="/img/Product_portfolio/banner.png" alt="">
                                </a>
                            </div>
                        </div>     

                        <div class="product_right">
                            <div class="product_right-content">
                                <h2>Thực phẩm tươi sống</h2>
                                <div class="banner">
                                    <span class="fa-angle-left"></span>
                                    <a href="#">
                                        <img src="/img/Product_portfolio/banner-1.png" alt="">
                                    </a>
                                    <span class="fa-angle-right"></span>
                                </div>
                                <div class="sorter">
                                    <div class="sorter_list">
                                        <a href="#" class="active">Phổ biến</a>
                                        <a href="#">Bán chạy</a>
                                        <a href="#">Hàng mới</a>
                                        <a href="#">Giá thấp</a>
                                        <a href="#">Giá cao</a>
                                    </div>    
                                </div>
                                <div class="food">
                                    <div class="food_now">
                                        <a href="#" class="item item-1">
                                            <img src="/img/Product_portfolio/tiki-now.png" alt="">
                                        </a>
                                        <a href="#" class="item item-2">
                                            <img src="/img/Product_portfolio/freeship.png" alt="">
                                        </a>
                                        <a href="#" class="close-all">Xoá tất cả</a>
                                    </div>
                                    <div class="food_list">
                                        <div class="product-all">   
                                            <div class="product product-one">
                                                <router-link to="/product/details">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>                                          
                                                </router-link>
                                            </div>

                                            <div class="product product-two">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                            </div>
                    
                                            <div class="product product-three">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>                                            
                                                </a>
                                            </div>

                                            <div class="product product-four">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            
                                            <div class="product product-five">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-six">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-sevent">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            
                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="product product-eight">
                                                <a href="#">              
                                                    <div class="thumbnail">
                                                        <img src="/img/Product_portfolio/product-1.png" alt="">
                                                        <span class="freeship">
                                                            <img src="/img/Product_portfolio/tiki-fast.png" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="info">
                                                        <div class="tiki-delicious">
                                                            <img src="/img/Product_portfolio/Tiki-delicious.png" alt="">
                                                        </div>
                                                        <div class="name">
                                                            <p>Ad</p>
                                                            <span>[Chỉ Giao HCM] Nhãn Thái Đồng Tháp tận vườn loại 1 siêu ngon</span>
                                                        </div>
                                                        <div class="review">
                                                            <div class="stars start-1">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                                <img src="/img/Product_portfolio/star.png" alt="">
                                                            </div>
                                                            <div class="style-sperator"></div>
                                                            <div class="style-sold">Đã bán 84</div>
                                                        </div>
                                                        <div class="price-discount">
                                                            <div class="price_discount-price">49.000 ₫</div>
                                                            <div class="price_discount-discount">-17%</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="panigation">
                                            <ul>
                                                <li>
                                                    <a href="#" class="current bgColor">1</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="current">2</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="current">3</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="current">4</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="current">5</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="banner-tikimom">
                        <a href="#">
                            <img src="/img/Product_portfolio/tiki-momclub.png" alt="">
                        </a>                   
                    </div>
                </div>
            </div>
        </main>
        <!-- main -->

        <!-- footer -->
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="book">
                        <h2 class="book-title">Hỗ trợ khách hàng</h2>
                        <p class="hotline">
                            Hotline: 
                            <a href="#">1900-6035</a>
                            <span class="small-text">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                        </p>
                        <a href="#" class="small-text">Các câu hỏi thường gặp</a>
                        <a href="#" class="small-text">Gửi yêu cầu hỗ trợ</a>
                        <a href="#" class="small-text">Hướng dẫn đặt hàng</a>
                        <a href="#" class="small-text">Phương thức vận chuyển</a>
                        <a href="#" class="small-text">Chính sách đổi trả</a>
                        <a href="#" class="small-text">Hướng dẫn trả góp</a>
                        <p class="security">
                            Hỗ trợ khách hàng:
                            <a href="#">hotro@tiki.vn</a>
                        </p>
                        <p class="security">
                            Báo lỗi bảo mật:
                            <a href="#">security@tiki.vn</a>
                        </p>
                    </div>
                    <div class="book">
                        <h2 class="book-title">Về Tiki</h2>
                        <a href="#" class="small-text">Giới thiệu Tiki</a>
                        <a href="#" class="small-text">Tuyển dụng</a>
                        <a href="#" class="small-text">Chính sách bảo mật thanh toán</a>
                        <a href="#" class="small-text">Chính sách bảo mật thông tin cá nhân</a>
                        <a href="#" class="small-text">Chính sách giải quyết khiếu nại</a>
                        <a href="#" class="small-text">Điều khoản sử dụng</a>
                        <a href="#" class="small-text">Giới thiệu Tiki Xu</a>
                    </div>
                    <div class="book">
                        <h2 class="book-title">Hợp tác và liên kết</h2>
                        <a href="#" class="small-text">Quy chế hoạt động Sàn GDTMDT</a>
                        <a href="#" class="small-text">Bán hàng cùng Tiki</a>
                        <h2 class="book-title">Chứng nhận bởi</h2>
                        <div class="flex">
                            <a href="#">
                                <img src="/img/app/bo-cong-thuong-2.png" style="width: 32px;" alt="">
                            </a>
                            <a href="#">
                                <img src="/img/app/bo-cong-thuong-1.png" style="height: 32px;" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="book">
                        <h2 class="book-title">Phương pháp thanh toán</h2>
                        <p class="payment">
                            <span class="icon">
                                <img src="/img/app/visa.png" alt="">
                            </span>
                            <span class="icon">
                                <img src="/img/app/atm.png" alt="">
                            </span>
                        </p>
                        <h2 class="book-title">Dịch vụ giao hàng</h2>
                        <a href="#">
                            <img src="/img/app/tiki-cart-now.png" alt="">
                        </a>
                    </div>
                    <div class="book">
                        <h2 class="book-title">Liên kết với chúng tôi</h2>
                        <p>
                            <a href="#" class="icon">
                                <img src="/img/app/facebook.png" alt="">
                            </a>
                            <a href="#" class="icon">
                                <img src="/img/app/youtube.png" alt="">
                            </a>
                            <a href="#" class="icon">
                                <img src="/img/app/messenger.png" alt="">
                            </a>
                        </p>
                        <h2 class="book-title">Tải ứng dụng trên điện thoại</h2>
                        <div class="flex">
                            <img src="/img/app/qrcode.png" alt="" style="width: 80px;">
                            <div class="dowload">
                                <a href="#">
                                    <img src="/img/app/appstore.png" alt="">
                                </a>
                                <a href="#">
                                    <img src="/img/app/playstore.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer -->
    </div>
</template>