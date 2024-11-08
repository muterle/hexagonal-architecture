import Clock from "./Clock";

export default class RealClock implements Clock {
  getToday(): Date {
    return new Date();
  }
}
