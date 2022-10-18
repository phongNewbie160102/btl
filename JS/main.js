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
            name: 'SP24',
            dec: 'Áo sơ mi lụa phong cách hàn quốc dài tay cổ đức chất liệu lụa mềm mịn không nhăn nhàu A24',
            image: './asssets/img/sp24.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP4',
            dec: 'quần ống rộng suông nữ dây rút lưng thun vải kaki nhiều màu trẻ trung',
            image: './asssets/img/sp4.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP25',
            dec: 'Quần jean nữ ống loe cạp cao co dãn nhẹ bốn chiều siêu tôn dáng chân dài',
            image: './asssets/img/sp25.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP26',
            dec: 'Quần Jean Skinny Nữ Dáng Ôm Lưng Siêu Cao Trơn Basic',
            image: './asssets/img/sp26.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP1',
            dec: 'Áo khoác nỉ Hoodies cao cấp HD02, Áo bomber form rộng Oversize',
            image: './asssets/img/sp1.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP11',
            dec: 'Áo Hoodie ni lông trơn màu xám xanh UNISEX ,Nam nữ unisex, HOODIE TRƠN',
            image: './asssets/img/sp11.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP14',
            dec: 'Áo sơ mi đi biển, bộ đồ đôi hoa quả hoạ tiết nam nữ quan ao hawaii Kate Thái',
            image: './asssets/img/sp14.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'

        },
        {
            name: 'SP17',
            dec: 'Áo sơ mi nam dài tay Urano cổ bẻ, áo sơ mi vải lụa nến không nhăn không xù cao cấp',
            image: './asssets/img/sp17.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP9',
            dec: 'Quần Kaki Nam Baggy Ống Suông Basic Unisex',
            image: './asssets/img/sp9.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
        },
        {
            name: 'SP10',
            dec: 'Quần Jean Nam Baggy Ống Suông Unisex phong cách SIMPLE Kiểu quần bò nam form suông rộng jeans',
            image: './asssets/img/sp10.png',
            cours: '1.299.000đ',
            courOld: '1.500.000đ'
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
                    <span class="home-product-item__sold">88 đã bán</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">Tanktop</span>
                    <span class="home-product-item__origin-name">Hàn Quốc</span>
                </div>
                <div class="home-product-item__favarite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__percent">10%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>
            `
        })
        listao.innerHTML = htmls.join('');
    },
}

app.start();