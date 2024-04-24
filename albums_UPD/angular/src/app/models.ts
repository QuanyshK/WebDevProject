export interface Songs{
  id : number,
  'img' : string,
  'name' : string,
  'author':string,
  'link' : string,
  'duration':number,
  'album' : number
}

export interface Albums{
  id : number,
  'img' : string,
  'name' : string,
  'author':string,
  'duration':number,
  'songamount' : number,
  'year':number
}

export  interface  Author{
  id : number,
  'img' : string,
  'name' : string,
  'songamount' : number,
  'albums':Albums[],
  'listeningCount':number
}
