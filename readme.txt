okay what i am thinking to build is a protofolio site using html css and js and making it responsive and using a really good color combination
so first of all let me if there is something i can think  of before seeing any other thng 
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
:root{
    --color-primary: #191d2b;
    --color-secondary: #27AE60;
    --color-white: #FFFFFF;
    --color-black: #000;
    --color-grey0: #f8f8f8;
    --color-grey-1: #dbe1e8;
    --color-grey-2: #b2becd;
    --color-grey-3: #6c7983;
    --color-grey-4: #454e56;
    --color-grey-5: #2a2e35;
    --color-grey-6: #12181b;
    --br-sm-2: 14px;
    --box-shadow-1: 0 3px 15px rgba(0,0,0,.3);
}
body{
    background-color: var(--color-primary);
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    color:var(--color-white);
    transition: all .4s ease-in-out;
}
a{
    display: inline-block;
    text-decoration: none;
    color:inherit;
    font-family: inherit;

}
header{
    height:100vh;
    color:var(--color-white);
    overflow: hidden;
}
section{
    min-height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 3rem 18rem;


}
.active{
    display: block;
}
.section{
    transform: translateY(-100%) scale(0);
    transition: all .4s ease-in-out;
    background-color: var(--color-primary);
}
.sec1{
 display: none;
 transform: translateY(0) scale(1);
 background-color: pink;
}
.sec2{
    display: none;
    transform: translateY(0) scale(1);
    background-color: green;
   }
   .sec3{
    display: none;
    transform: translateY(0) scale(1);
    background-color: grey;
   }
   .sec4{
    display: none;
    transform: translateY(0) scale(1);
    background-color: red;
   }
   .sec5{
    display: none;
    transform: translateY(0) scale(1);
   }
   //controls
   .controls{
    position: fixed;
    z-index: 10;
    top:50%;
    right: 3%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    .active-btn{
        background-color: var(--color-secondary)!important;
        transition: all .4s ease-in-out;
        i { color: var(--color-white);
    }}
    .control{
        padding:1rem;
        cursor: pointer;
        background-color: var(--color-grey-4);
        width:55px;
        height:55px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: .7rem 0;
        box-shadow: var(--box-shadow-1);
        i{
            font: 1.2rem;
            color:var(--color-grey-2);
            pointer-events: none;

        }


    }
   }
   .active{
    display: block;
    animation:scaleAnim 1s ease-in-out;
    @keyframes scaleAnim {
        0%{
            transform: translateY(-100%)scaleY(0)
        }
        100%{
            transform: translateY(0)scaleY(1);
        }
        
    }
}
// header content
.header-content{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    height:100%;
    .left-header{
        display: flex;
        align-items: center;
        position: relative;
    }
    .h-shape{
        transition: all .4s ease-in-out;
        width: 65%;
        height: 100%;
        background-color: var(--color-secondary);
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);

    }
    .image{
        border-radius: var(--br-sm-2);
            height: 90%;
            width: 68%;
            margin-left: 4rem;
            background-color: var(--color-black);
            overflow: hidden;
            transition: all .4s ease-in-out;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: all .4s ease-in-out;
                filter: grayscale(100%);
                &:hover{
                    filter: grayscale(0);
                }}
    }

}
