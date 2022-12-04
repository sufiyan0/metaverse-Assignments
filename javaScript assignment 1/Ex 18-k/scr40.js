


function make_album(artest,album,name, tracks = null){
    if(tracks){
        return name =  {Artest : album, NumberOfTracks : tracks}
    }else{
        return name =  {Artest : album}
    }
} 

console.log(make_album('AtifAslam', 'Jal' , 'FirstAtifAslam',1));
console.log(make_album('AtifAslam', 'sajni' , 'AtifAslam'));
console.log(make_album('abcd', 'xyz' , 'list',1));
