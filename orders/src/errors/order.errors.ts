export class OrderNotFoundError
extends Error {


  constructor(){

    super(
      'Order not found'
    );


    this.name =
      'OrderNotFoundError';

  }


}



export class OrderAlreadyExistsError
extends Error {


  constructor(){

    super(
      'Order already exists'
    );


    this.name =
      'OrderAlreadyExistsError';

  }


}