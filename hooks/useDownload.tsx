export const useDownload: any = (e: any, fileName: string) => {
    e.preventDefault()

    fetch(e.target.href, {
        method: "GET",
        headers: {}
    }).then(res => {
        res.arrayBuffer().then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", 'cayman-cookout-2023.jpg'); //or any other extension
            document.body.appendChild(link);
            link.click();
            res.blob()
        });
    }).catch(err => {
        console.log(err);
    });

}