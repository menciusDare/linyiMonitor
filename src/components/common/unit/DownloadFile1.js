// download url
export default function downloadFile1(response, fileName, fileSuffix) {
    var blob = new Blob([response], { type: 'application/x-msdownload' });
    var downloadElement = document.createElement('a');
    var href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = fileName + "." + fileSuffix; //下载后文件名及文件后缀
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
}
