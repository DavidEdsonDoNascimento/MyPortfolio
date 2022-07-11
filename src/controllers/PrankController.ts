export class PrankController {
  static count = 0;
  static MAX_ATTEMPTS = 10;
  static STATUS = {
    STOP: false
  };

  static itsTimeReboot(): boolean {
    return PrankController.count > PrankController.MAX_ATTEMPTS;
  }
}
