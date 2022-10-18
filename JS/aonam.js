const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const listao = $('#list-ao');
const login = $('#log-in');
const sigup = $('#sigup');
const mdsigup = $('#md-sigup');
const mdlogin = $('#md-login');
const callog = $('#backmdlg');
const calsig = $('#backmdsig');

login.onclick = function() {
    mdlogin.classList.add('avtive-modal');
}
callog.onclick = function() {
    mdlogin.classList.remove('avtive-modal');
}


sigup.onclick = function() {
    mdsigup.classList.add('avtive-modal');
}
calsig.onclick = function() {
    mdsigup.classList.remove('avtive-modal');
}
const app = {

    listao: [{
            name: 'SP1',
            dec: 'Áo khoác nỉ Hoodies cao cấp HD02, Áo bomber form rộng Oversize',
            image: '../asssets/img/sp1.png',
            cours: '299.000đ',
            courOld: '500.000đ'

        },
        {
            name: 'SP2',
            dec: 'Áo khoác gió 3 khóa nam nữ chống nước',
            image: '../asssets/img/sp2.png',
            cours: '199.000đ',
            courOld: '300.000đ'

        },
        {
            name: 'SP3',
            dec: 'Set bộ đồ nữ chữ N , áo polo khóa kèm quần short đùi thêu form rộng unisex',
            image: '../asssets/img/sp3.png',
            cours: '289.000đ',
            courOld: '320.000đ'

        },
        {
            name: 'SP7',
            dec: 'Áo sơ mi ngắn tay form rộng, thời trang hiện đại unisex chất liệu vải lụa mềm chống nhăn',
            image: '../asssets/img/sp7.png',
            cours: '399.000đ',
            courOld: '430.000đ'

        },
        {
            name: 'SP11',
            dec: 'Áo Hoodie ni lông trơn màu xám xanh UNISEX ,Nam nữ unisex, HOODIE TRƠN',
            image: '../asssets/img/sp11.png',
            cours: '239.000đ',
            courOld: '660.000đ'

        },
        {
            name: 'SP14',
            dec: 'Áo sơ mi đi biển, bộ đồ đôi hoa quả hoạ tiết nam nữ quan ao hawaii Kate Thái',
            image: '../asssets/img/sp14.png',
            cours: '360.000đ',
            courOld: '400.000đ'

        },
        {
            name: 'SP17',
            dec: 'Áo sơ mi nam dài tay Urano cổ bẻ, áo sơ mi vải lụa nến không nhăn không xù cao cấp',
            image: '../asssets/img/sp17.png',
            cours: '239.000đ',
            courOld: '500.000đ'
        },
        {
            name: 'SP18',
            dec: 'Áo Blazer Nam Tay Lỡ MANDO Form Rộng Kiểu Dáng Thời Trang Hàn Quốc Basic',
            image: '../asssets/img/sp18.png',
            cours: '250.000đ',
            courOld: '300.000đ'
        },


    ],

    start: function() {
        var _this = this;
        this.renderList();
    },

    renderList: function() {
        var htmls = this.listao.map(function(ao, index) {
            return `
            <div class="col l-2-4 m-4 c-6">
            <a class="home-product-item" href="#">
                <div class="home-product-item__img" style=" background-image: url(${ao.image});">
                </div>
                <h4 class="home-product-item__name">
                    ${ao.dec}
                </h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${ao.courOld}</span>
                    <span class="home-product-item__price-current">${ao.cours}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like--icon-empty far fa-heart"></i>
                        <i class="home-product-item__like--icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">20 đã bán</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">VietShop</span>
                    <span class="home-product-item__origin-name">Hà Nội</span>
                </div>
                <div class="home-product-item__favarite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__percent">15%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>
            `
        })
        if (listao) {
            listao.innerHTML = htmls.join('');
        }

    },

}

app.start();