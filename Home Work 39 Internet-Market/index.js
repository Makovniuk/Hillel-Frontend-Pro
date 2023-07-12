const data = [
    {
       category: "Sports nutrition",
       products: [
            {   
                name: 'Протеин POWER PRO Whey Protein Банан 1 кг',
                description: '-концентрат сывороточный белковый -молочная сыворотка сухая -глюкоза -ароматизатор натуральный -подсластитель Пищевая (питательная) ценность на 100 g (г): белки – 67,0 g (г), жиры - 3,5 g (г), углеводы - 22,5 g (г)',
                price: 1500,
                img: 'https://cdn.27.ua/799/a3/cd/697293_3.jpeg',
            },
            {   
                name: 'Креатин Ostrovit Creatine Monohydrate апельсин 300 г',
                description: '-концентрат сывороточный белковый -молочная сыворотка сухая -глюкоза -ароматизатор натуральный -подсластитель Пищевая (питательная) ценность на 100 g (г): белки – 67,0 g (г), жиры - 3,5 g (г), углеводы - 22,5 g (г)',
                price: 600,
                img:'https://cdn.27.ua/799/d3/95/6607765_1.jpeg',
            },
            {  
                name: 'Гейнер Multigainer Vansiton Ваниль 1,5 кг',
                description: '-концентрат сывороточный белковый -молочная сыворотка сухая -глюкоза -ароматизатор натуральный -подсластитель Пищевая (питательная) ценность на 100 g (г): белки – 67,0 g (г), жиры - 3,5 g (г), углеводы - 22,5 g (г)',
                price: 800,
                img:'https://cdn.27.ua/799/84/34/2196532_2.jpeg',
            },
            {   
                name: 'Изотоник OstroVit Isotonic 1500 g /150 servings/ Lemon Mint',
                description: '-концентрат сывороточный белковый -молочная сыворотка сухая -глюкоза -ароматизатор натуральный -подсластитель Пищевая (питательная) ценность на 100 g (г): белки – 67,0 g (г), жиры - 3,5 g (г), углеводы - 22,5 g (г)',
                price: 1000,
                img:'https://cdn.27.ua/sc--media--prod/default/d1/34/86/d13486da-e3f7-4322-af29-46b71f85ffb0.jpg',
            },      
       ]
    },

    {
        category: "Cardio equipment",
        products: [
             {   
                 name: 'Беговая дорожка MaxxPro Х502 (Х502)',
                 description: 'Минимальная скорость бегового полотна – 0,8 км/час, Постоянная мощность: 0,6 к.с., Максимальная мощность: 1,5 к.с., Амортизация: 6 резиновых вставок под беговым дека, Толщина бегового дека: 14 мм, Толщина бегового полотна: 1.4 мм',
                 price: 10500,
                 img: 'https://cdn.27.ua/799/1e/a6/1056422_2.jpeg',
             },
             {   
                 name: 'Велоэргометр HB8268HPM K00012327',
                 description: '-Предназначен для тренировки сердечно-сосудистой и дыхательной систем и тренировки мышц ног.Регулировка нагрузки электронная автоматическая, Современная технологичная порошковая окраска корпуса цвета «Black sand»',
                 price: 25000,
                 img:'https://cdn.27.ua/799/9a/98/3709592_1.jpeg',
             },
             {  
                 name: 'Орбитрек MaxxPro E4',
                 description: 'Назначение: дыхательная система, опорно-двигательный аппарат, сердечно-сосудистая система.Показатели компьютера:  время тренировок, потраченные калории, пройденная дистанция, пульс, скорость.',
                 price: 7500,
                 img:'https://cdn.27.ua/799/9e/8a/2203274_1.jpeg',
             },
             {   
                 name: 'Гребной тренажер магнитный Besport BS-6031R DRAGER Черно-желтый',
                 description: '. Гребной тренажер BS-6031R DRAGER является идеальным сочетанием высокого качества, новейших технологий и доступной цены. Стильный дизайн, мощная механика, прочная конструкция, надежные материалы, универсальная расцветка, качественная сборка.',
                 price: 18000,
                 img:'https://cdn.27.ua/sc--media--prod/default/1b/38/b0/1b38b028-3d72-4ac5-8905-c770af255fe9.jpg',
             },      
        ]
    },

    {
        category: "Crossfit equipment",
        products: [
             {   
                 name: 'Гантель NEO-SPORT 20 кг черный',
                 description: 'гриф 450x30 – 1 шт., гайка – 2 шт., диск 2,5 кг – 4 шт., диск 5 кг – 2 шт. Увеличивает силу и объем мышц',
                 price: 700,
                 img: 'https://cdn.27.ua/799/0d/58/396632_4.jpeg',
             },
             {   
                 name: 'Утяжелители Champion 2х3 кг',
                 description: 'Категория: Фитнес Тип: манжеты Вес утяжелителя: 2х3 кг, кг Гарантия: от производителя',
                 price: 427,
                 img:'https://cdn.27.ua/799/e2/01/909825_1.jpeg',
             },
             {  
                 name: 'Медбол LiveUp Medicine Ball 10 кг Black (LS3006F-10)',
                 description: 'Медбол LiveUp Medicine Ball – это твердый мяч, который ранее использовался исключительно в реабилитационных целях. Но, показав свою эффективность, стал достаточно популярным инвентарем в силовых и аэробных тренировках.',
                 price: 4350,
                 img:'https://cdn.27.ua/799/95/6c/1480044_1.jpeg',
             },
             {   
                 name: 'Крючки для перекладины и тяги 4FIZJO Hooks 4FJ0121',
                 description: 'Крючки для тяги от польского бренда 4FIZJO используются при выполнении силовых упражнений. Многие спортсмены во время тренировок, в том числе уже и не новички, фокусируются на хвате, забывая о правильной технике выполнения',
                 price: 700,
                 img:'https://cdn.27.ua/sc--media--prod/default/c8/5a/25/c85a251e-ef0b-443e-b590-1eb6c74db1b9.jpg',
             },      
        ]
    },

    
];

//создаем секции внутри обертки и присваеваем классы!
const wrapperBlocks = document.querySelector('.wrapper');

const categoryProductSection = document.createElement('section');
categoryProductSection.classList.add('category-product-section');

const productListSection = document.createElement('section');
productListSection.classList.add('list-product-section');

const productInfoSection = document.createElement('section');
productInfoSection.classList.add('info-product-section');

wrapperBlocks.append(categoryProductSection,productListSection,productInfoSection);

// Создаем функцию рендера категории товаров
function renderCategoryProducts() {
    data.forEach((item, index )=> {
        let divCategory = document.createElement('div');
        divCategory.classList.add('category')
        categoryProductSection.append(divCategory);
        divCategory.innerText= item.category;
        return index;
    });
}

renderCategoryProducts();

//Создаем функцию клика для категории
const category = document.querySelectorAll('.category');

function clickEventForCategoryProducts() {
    category.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(item, index);
            renderListProducts(index)
        }) 
    });
}

clickEventForCategoryProducts();

//Создаем Функция рендера списка продуктов в средней секцииб после клика на категорию.
function renderListProducts(i) {
    productListSection.innerText = '';

    data[i].products.forEach((item, index) => { 
        let divProductList = document.createElement('div');
        let productTitle = document.createElement('h3');
        let productPrice = document.createElement('p');
        let productImg = document.createElement('img');

        divProductList.classList.add('product-list');
        productTitle.classList.add('product-title');
        productPrice.classList.add('product-price');
        productImg.classList.add('product-img');

        productTitle.innerHTML = item.name;
        productPrice.innerHTML = `${item.price} UAH`;

        productImg.setAttribute('src', item.img);
        productTitle.setAttribute('id', index);

        divProductList.appendChild(productTitle);
        divProductList.appendChild(productPrice);
        divProductList.appendChild(productImg);

        productListSection.appendChild(divProductList);

        productTitle.addEventListener('click', () => {
             let productIndex = productTitle.getAttribute('id');
            renderProductInfo(i, productIndex)  
        });
    });
}

//Создаем Функция рендера описание продуктов  в правой колонке секцииб после клика на продукт.
function renderProductInfo(i, j) {
    productInfoSection.innerHTML = '';

    let divProductInfo = document.createElement('div');
    let productTitle = document.createElement('h3');
    let productPrice = document.createElement('p');
    let productImg = document.createElement('img');
    let productDescription = document.createElement('p');
    let buttonBay = document.createElement('button');

    divProductInfo.classList.add('product-info');
    productTitle.classList.add('product-title');
    productPrice.classList.add('product-price');
    productImg.classList.add('product-img');
    productDescription.classList.add('product-description');
    buttonBay.classList.add('button-bay');
    
    productDescription.innerHTML = data[i].products[j].description;
    productTitle.innerHTML = data[i].products[j].name;
    productPrice.innerHTML = `${data[i].products[j].price} UAH`;

    productImg.setAttribute('src', data[i].products[j].img);
    buttonBay.setAttribute('type', 'button');
    buttonBay.innerText = 'Купить';

    divProductInfo.appendChild(productImg);
    divProductInfo.appendChild(productTitle);
    divProductInfo.appendChild(productDescription);
    divProductInfo.appendChild(productPrice);
    divProductInfo.appendChild(buttonBay);
    
    productInfoSection.appendChild(divProductInfo);

    buttonBay.addEventListener('click', () => {
        setTimeout(() => {
            alert('Product successfully added to cart!') ;
            window.location.reload();
        }, 500);
    })       
};
