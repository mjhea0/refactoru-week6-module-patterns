describe('Repeater.repeatString', function() {
 it('should return a string repeated n times', function() {
  Repeater.repeatString('cat', 3).should.equal('catcatcat');
 });
});

describe('Repeater.repeatFunction', function() {
 it('should call a function n times', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatFunction(write, 3);
  (str).should.equal('ohhihihi');
 });
});

describe('Repeater.repeatMore', function() {
 it('should return a string repeated n times (+1 each time the function is called)', function() {
  Repeater.repeatMore('cat').should.equal('cat');
 });
 it('should return a string repeated n times (+1 each time the function is called)', function() {
  Repeater.repeatMore('dog').should.equal('dogdog');
 });
 it('should return a string repeated n times (+1 each time the function is called)', function() {
  Repeater.repeatMore('bat').should.equal('batbatbat');
 });
 it('should return a string repeated n times (+1 each time the function is called)', function() {
  Repeater.repeatMore('lion').should.equal('lionlionlionlion');
 });
 it('should return a string repeated n times (+1 each time the function is called)', function() {
  Repeater.repeatMore('lemur').should.equal('lemurlemurlemurlemurlemur');
 });
});
