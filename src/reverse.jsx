/* eslint-disable react/no-access-state-in-setstate */
export default function reverse() {
  this.setState(this.state.items.reverse());
}
