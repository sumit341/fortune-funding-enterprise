export class PaymentNotFoundError
  extends Error {

  constructor() {

    super(
      'Payment not found'
    );

    this.name =
      'PaymentNotFoundError';

  }

}



export class PaymentAlreadyProcessedError
  extends Error {

  constructor() {

    super(
      'Payment already processed'
    );

    this.name =
      'PaymentAlreadyProcessedError';

  }

}