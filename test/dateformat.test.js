
suite('DateFormat', function() {

  suite('time format', function() {
    test('day', function() {
      var date = new Date(2013, 4, 8);

      assert.equal(DateFormat('%d %j %D %l', date), '08 8 Wed Wednesday');

      var date2 = new Date(2013, 4, 10);

      assert.equal(DateFormat('%d %j %D %l', date2), '10 10 Fri Friday');
    });

    test('month', function() {
      var date = new Date(2013, 3, 15);

      assert.equal(DateFormat('%n %F %m %M', date), '3 April 04 Apr');

      var date2 = new Date(2013, 11, 15);

      assert.equal(DateFormat('%n %F %m %M', date2), '11 December 12 Dec');
    });

    test('week', function() {
      var date = new Date(2013, 4, 15);

      assert.equal(DateFormat('%w', date), '3');
    });

    test('year', function() {
      var date = new Date(2013, 4, 15);

      assert.equal(DateFormat('%Y %y', date), '2013 13');
    });

    test('time', function() {
      var date = new Date(2013, 4, 15, 8, 30, 30, 50);

      assert.equal(DateFormat('%g %G %h %h %i %s %u %a %A %e', date), '8 8 08 08 30 30 50 am AM ' + date.getTimezoneOffset());

      date = new Date(2013, 4, 15, 18, 5, 5, 5);

      assert.equal(DateFormat('%g %G %h %H %i %s %u %a %A %e', date), '6 18 06 18 05 05 5 pm PM ' + date.getTimezoneOffset());
    });

    test('st,nd,rt,th', function() {
      var date = new Date(2013, 4, 1);

      assert.equal(DateFormat('%S', date), 'st');

      date = new Date(2013, 4, 2);

      assert.equal(DateFormat('%S', date), 'nd');

      date = new Date(2013, 4, 3);

      assert.equal(DateFormat('%S', date), 'rd');

      date = new Date(2013, 4, 15);

      assert.equal(DateFormat('%S', date), 'th');
    });

    test('midnight should be 12', function() {
      var date = new Date(2013, 4, 1);

      assert.equal(12, DateFormat('%g', date));
    });
  });
});