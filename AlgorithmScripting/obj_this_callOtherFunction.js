letobject1 = {
    basic: {
        somefunction() {
            console.info('somefunction');
        },
    },
    fancy() {
        return {
            otherfunction: () => {
                console.info('otherfunction');
                console.log(this)
                this.basic.somefunction();
            }
        }
    },
};
object1.fancy().otherfunction()