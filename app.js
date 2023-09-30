new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue!',
        rawHTML: '<span style="color: red;">This is raw HTML content.</span>',
        elementId: 'unique-element',
        num1: 10,
        num2: 20,
        isActive: true,
        hasError: false,
        textColor: 'blue',
        fontSize: 20,
        user: { name: 'John', age: 30 },
        items: ['A', 'B', 'C'],
        tasks: [
            { id: 1, name: 'Task 1', completed: true },
            { id: 2, name: 'Task 2', completed: false },
            { id: 3, name: 'Task 3', completed: true }
        ],
        textInput: ''
    },
    computed: {
        fullName() {
            return `${this.user.name} ${this.user.age}`;
        }
    },
    methods: {
        calculateSum() {
            return this.num1 + this.num2;
        },
        handleClick() {
            console.log('Button Clicked!');
        }
    }
});
