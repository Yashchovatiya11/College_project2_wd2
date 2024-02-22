

$.ajax({
    url: "./json/product.json", success: function (result) {



        const dataarr = result.product.map(datas => `
        
                <div class="col-xl-4 col-md-6 col-12">
                    <div class="mt-5 d-block product-item rounded" style="width: 400px;">
                        <img src="${datas.image[0].url}" alt="" width="100%">
                        <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                            <h4 class="text-primary">${datas.name}</h4>
                            <span class="text-body">${datas.des}</span>
                        </div>
                    </div>
                </div>
                `
        );
        // console.log("hallll");

        const htmlString = dataarr.join('');

        $('#data').html(htmlString);

    }
});

$.ajax({
    url: "./json/product2.json", success: function (result) {



        const dataarr = result.product.map(datas => `
        
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="${datas.image[0].url}" alt="">
                        <div class="p-4">
                            <div class="text-center mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div>
                            <h4 class="mb-3">${datas.name}</h4>
                            <p>${datas.des}</p>
                            <h4 class="text-primary">${datas.price}</h4>
                        </div>
                        <div class="store-overlay">
                            <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i
                                    class="fa fa-arrow-right ms-2"></i></a>
                            <a href="" class="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i
                                    class="fa fa-cart-plus ms-2"></i></a>
                        </div>
                    </div>
                </div>
                `
        );
        // console.log("hallll");

        const htmlString = dataarr.join('');

        $('.more_tea').html(htmlString);

    }
});


