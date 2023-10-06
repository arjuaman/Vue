export default {
    data() {
        return{
          count: 0
        }
      },
      methods: {
        increment() {
          return (this.count += 1);
        },
      },
}