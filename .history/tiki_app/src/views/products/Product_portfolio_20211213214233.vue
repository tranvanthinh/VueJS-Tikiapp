<template>
    <div class="product-portfolio">
    <Header />
        <!-- main -->
        <main>
            <div class="container">
                <div class="product_list_top">
                    <div class="brandcrumb">
                        <router-link to="/">
                            <span>Trang chủ</span>
                        </router-link>
                        <span class="fa-angle-right"></span>
                        <router-link to="/product">
                            <span class="align">Thực phẩm tươi sống</span>
                        </router-link>
                    </div>
                </div>
                <div class="product_list_bottom">
                    <div class="ctegoryViewstyle">
                        <div class="product_left">
                            <div class="product_left--book">
                                <h2>Danh mục sản phẩm</h2>
                                <div class="list">
                                    <router-link to="" class="item item--category">Rau củ quả</router-link>
                                    <router-link to="" class="item item--catergory">Hải sản</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm chế biến sẵn</router-link>
                                    <router-link to="" class="item item--catergory">Thịt</router-link>
                                    <router-link to="" class="item item--catergory">trái cây</router-link>
                                    <router-link to="" class="item item--catergory">Bánh kẹo</router-link>
                                    <router-link to="" class="item item--catergory">Thực phảm đông lạnh khác</router-link>
                                    <router-link to="" class="item item--catergory">Đồ uống - Giải khát</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm khô</router-link>
                                    <router-link to="" class="item item--catergory">Gia vị & Dầu ăn</router-link>
                                    <router-link to="" class="item item--catergory">Bơ sữa & Trứng</router-link>
                                    <router-link to="" class="item item--catergory">Đồ hộp</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm cho trẻ em</router-link>
                                    <router-link to="" class="item item--catergory">Nấu ăn và làm bánh</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm bổ dưỡng</router-link>
                                    <router-link to="" class="item item--catergory">Đặc sản Việt Nam</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm hữu cơ</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm chay</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm bảo vệ sức khoẻ</router-link>
                                    <router-link to="" class="item item--catergory">Thực phẩm cao cấp</router-link>
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
                                        <router-link class="active" to="">Phổ biến</router-link>
                                        <router-link to="">Bán chạy</router-link>
                                        <router-link to="">Hàng mới</router-link>
                                        <router-link to="">Giá thấp</router-link>
                                        <router-link to="">Giá cao</router-link>
                                    </div>    
                                </div>
                                <div class="food">
                                    <div class="food_now">
                                        <router-link class="item item-1" to="">
                                            <img src="/img/Product_portfolio/tiki-now.png" alt="">
                                        </router-link>
                                        <router-link class="item item-2" to="">
                                            <img src="/img/Product_portfolio/freeship.png" alt="">
                                        </router-link>
                                        <router-link class="close-all" to="">Xoá tất cả</router-link>
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

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
      Header
  }
}
</script>