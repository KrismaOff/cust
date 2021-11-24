class Custom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="d-flex">
            <select name="Hat" id="selectBtn">
                <option value="0">Hat none</option>
                <option value="1">Hat #1</option>
                <option value="2">Hat #2</option>
                <option value="3">Hat #3</option>
            </select>
            <select name="item" id="selectBtn2">
                <option value="0">item none</option>
                <option value="1">item #1</option>
                <option value="2">item #2</option>
                <option value="3">item #3</option>
            </select>
        </div>

        <div class="blockPic">
            <div class="blockPicSvg">
                <img class="img img11" id="img4" width="100px" height="100px" src="img/camera-svgrepo-com.svg" alt="">
                <img class="img img12" id="img5" width="150px" height="150px" src="img/computer-svgrepo-com.svg" alt="">
                <img class="img img13" id="img6" width="100px" height="100px" src="img//phone-svgrepo-com.svg" alt="">
                
                <img class="img img1" id="img1" width="100px" height="100px" src="img/hat-celebration-svgrepo-com.svg" alt="">
                <img class="img img2" id="img2" width="100px" height="100px" src="img/hat-svgrepo-com (1).svg" alt="">
                <img class="img img3" id="img3" width="100px" height="100px" src="IMG/hat-svgrepo-com.svg" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" class="bi bi-person"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
            </div>

        </div>
        `;
    document.querySelector("#selectBtn").addEventListener("click", this.btnHeat)
    document.querySelector("#selectBtn2").addEventListener("click", this.btnHeat2)
    }
    btnHeat(e) {
        console.log(e.target.value);
        switch (e.target.value) {
            case "0":
                document.getElementById("img4").style.display = "none"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "none"
                break;
            case "1":
                document.getElementById("img1").style.display = "flex"
                document.getElementById("img2").style.display = "none"
                document.getElementById("img3").style.display = "none"
                break;
            case "2": 
            document.getElementById("img1").style.display = "none"
            document.getElementById("img2").style.display = "flex"
            document.getElementById("img3").style.display = "none"
                break;

            case "3":
                document.getElementById("img1").style.display = "none"
                document.getElementById("img2").style.display = "none"
                document.getElementById("img3").style.display = "flex"
                break;
        
            default:
                break;
        }
    }
    btnHeat2(e) {
        console.log(e.target.value);
        switch (e.target.value) {
            case "0":
                document.getElementById("img4").style.display = "none"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "none"
                break;
            case "1":
                document.getElementById("img4").style.display = "block"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "none"
                break;
            case "2": 
            document.getElementById("img4").style.display = "none"
            document.getElementById("img5").style.display = "block"
            document.getElementById("img6").style.display = "none"
                break;

            case "3":
                document.getElementById("img4").style.display = "none"
                document.getElementById("img5").style.display = "none"
                document.getElementById("img6").style.display = "block"
                break;
        
            default:
                break;
        }
    }
}

customElements.define("custom-block", Custom);