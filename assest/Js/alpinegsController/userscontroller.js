document.addEventListener("alpine:init", () => {
    Alpine.data("usersData", () => ({

        users: [],
        pageUsers: [],
        isloading: false,
        showModal: false,
        pageCount: 1,
        itemsCount: 4,
        currentPage: 1,
        getUsers() {
            this.isloading = true;
            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
                this.users = res.data;
                this.pagination();
            }).catch(error => {
                // console.log(error.message);
                alert(error.message);
            }).finally(() => {
                this.isloading = false;

            })
        },
        pagination() {

            this.pageCount = Math.ceil(this.users.length / this.itemsCount);
            let start = (this.currentPage * this.itemsCount) - this.itemsCount;
            let end = this.currentPage * this.itemsCount
            this.pageUsers = this.users.slice(start, end)
            console.log(this.pageUsers);

        },
        nextPage() {
            this.currentPage++;
            if (this.currentPage > this.pageCount) this.currentPage = this.pageCount;

            this.pagination();

        },
        prevPage(){
            this.currentPage--;
            if (this.currentPage < 1) this.currentPage = 1;

            this.pagination();

        },
        handleChangeItemsCount(value){
            this.currentPage = 1;
            if (value < 1) this.itemsCount = 1;
            
            if(value > this.users.length) this.itemsCount = this.users.length;
            // this.pagination();

        }
    })


    )
})