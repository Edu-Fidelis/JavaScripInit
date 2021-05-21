var obj = {
    showContext: function showContent() {
        setTimeout(() => {
            this.log('after 1sec');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();