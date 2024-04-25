export interface Songs{
  id : number,
  'img' : string,
  'name' : string,
  'author':string,
  'link' : string,
  'duration':number,
  'album' : number,
  'authorId' : number
}

export interface Albums{
  id : number,
  'img' : string,
  'name' : string,
  'author':number,
  'duration':number,
  'songamount' : number,
  'year':number,
  'authord':number,
}

export  interface  Author{
  id : number,
  'img' : string,
  'name' : string
}
