* {
    box-sizing: border-box;
    border: 0;
    padding: 0;
    background-color: lightblue (0, 70%, 48%);
}
body {
    font-family: 'Courier New', Courier, monospace;
    color: hsl(0, 0%, 20%);
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 440px;
    height: 440px;
    border: 2px solid hsl(0, 0%, 0%); 

    div {
        background-color: hsl(0, 0%, 100%);
        border: 1px solid hsl(0, 0%, 87%);
    }
}


.btn {
    display: flex;
    justify-content: center;
    
    button {
        padding: 10px;
        border-color: hsl(244, 99%, 40%);
        border-radius: 10px;
        margin: 8px;
        background-color: hsl(43, 79%, 63%);
    }
}

.active {
    background-color: hsl(211, 100%, 50%);
    color: hsl(0, 0%, 100%);
}
.h1 {
    text-align: center;
    font-size: 2em;
    margin: 20px 0;
    color: hsl(0, 0%, 10%);
}
.h3 {
    text-align: center;
    font-size: 1.5em;
    margin: 10px 0;
    color: hsl(0, 0%, 30%);
}

h1, h3 {
    text-align: center; /* Centers the text horizontally */
    display: block; /* Ensures they behave as block elements */
    margin: 0 auto; /* Centers them horizontally if they have a width */
}
