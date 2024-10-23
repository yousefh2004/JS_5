const getCategories = async () => {
    const { data } = await axios.get('https://dummyjson.com/products/categories');
    return data;
};

const displayCategories = async () => {
    const loader = document.querySelector(".loader-container");
    loader.classList.add("active");
    const categories = await getCategories();
    const result = categories.map((category) => {
        return `
        <div class='category'>
        <h2>${category.name}</h2>
        <a href="dispcategories.html?category=${category.name}">Details</a>
        </div>
        `;
    }).join('');
    document.querySelector(".products .row").innerHTML = result;
    loader.classList.remove("active");
};

displayCategories();

const countdown = () => {
    const countdowndate = new Date ("2025-03-02T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdowndate - now ;
    const days = Math.floor(distance/86400000);
    const hours = Math.floor((distance%86400000)/3600000);
    const minutes = Math.floor(((distance%(1000*60*60)))/60000);
    const seconds = Math.floor(((distance%(1000*60)))/1000);

    document.querySelector("#days").textContent=days;
    document.querySelector("#hours").textContent=hours;
    document.querySelector("#minutes").textContent=minutes;
    document.querySelector("#seconds").textContent=seconds;
}

setInterval( ()=>{
    countdown();
},1000)
