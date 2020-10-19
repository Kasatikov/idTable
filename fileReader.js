let input = document.getElementById("myFile");
let chainMethod = document.getElementById("chain-method");
let simpleSearchTextarea = document.getElementById("simple-search");


input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
        let myFile = this.files[0];
        let reader = new FileReader();

        reader.addEventListener('load', function (e) {
            chainMethod.textContent = e.target.result;
            simpleSearchTextarea.textContent = e.target.result;
            let strArray = e.target.result.split('\n');
            window.hashTable = new HashTable({limit: 8});
            window.simpleSearch = new SimpleSearch({list: strArray});
            strArray.forEach((value) => {
                let truncatedValue = value.substring(0, 32);
                hashTable.insert(truncatedValue, truncatedValue);
                simpleSearch.insert(value);
            });
        });

        reader.readAsBinaryString(myFile);
    }
});