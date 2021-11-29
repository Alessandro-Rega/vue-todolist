const app = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                task: "Portare fuori il cane",
                done: false,
            },
            {
                task: "Fare la spesa",
                done: false,
            },
            {
                task: "Cucinare la cena",
                done: false,
            },
        ],
        task: "",
    },
    methods: {
        insertTask: function(){
            if(this.task != ""){
                this.todos.push({task: this.task, done: false});
                this.task = "";
            }
        },
        removeTask: function(i){
            this.$delete(this.todos, i);
        },
        checkout: function(i){
            this.todos[i].done == false ?  this.todos[i].done = true: this.todos[i].done = false;
        }
    }
});