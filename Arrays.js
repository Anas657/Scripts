

 function Arrays() {
    class Arrays {

        constructor(num1, num2) {
            this.num1 = num1
            this.num2 = num2
        }
        printCount(num1, num2) {
            console.log(this.num1 + this.num2)
        }
    }

    const test = new Arrays(5, 6)

    test.printCount()

    
    return (
        <div></div>
    )
 }
export default Arrays;
