export function svgResize(container){
    const svg = document.querySelector('svg');
    
    console.log('width = ', container.current ? container.current.offsetWidth : 0);
    console.log('height = ', container.current ? container.current.offsetHeight : 0);
    //console.log(container.current);
    /*
    console.log(svg.getAttribute("width"));
    //svg.setAttribute("width", 600);
    //svg.setAttribute("height", 400);
    //document.querySelectorAll("path").setAttribute("transform", "scale(0.2)");

    const scaleFactor = container.current.offsetWidth / 2754;
    console.log(scaleFactor);

    const allPaths = document.querySelectorAll("path");
    allPaths.forEach(path => path.setAttribute("transform", `scale(${scaleFactor})`));*/
    const newWidth = 360;

    const svgWidth = 1920; //980;
    const svgHeight = 1138; //569;
    //const scale = newWidth / svgWidth;
    const svgRatio = svgWidth/svgHeight;

    const newHeight = Math.round(newWidth / svgRatio);
    //const viewBoxCoord = `0 0 ${1488} ${755 * scale}`;
    //svg.setAttribute("viewBox", `-${ ((svgWidth / scale) - svgWidth/scale) } -${(svgHeight / scale) - svgHeight/scale} ${svgWidth / scale} ${svgHeight / scale}`);
    //svg.setAttribute("viewBox", `0 0 1850 1220`);
    svg.setAttribute("width", `${newWidth}px`);
    svg.setAttribute("height", `${newHeight}px`);
}

export function interactiveContinents(){
    //const europe = document.getElementById("#c10000ff");
    /*
    const europe = document.getElementById("path133");
    //console.log(europe);
    
    europe.addEventListener("onMouseOver", () => {
        console.log("Europe!");
    });*/
}