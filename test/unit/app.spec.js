describe('app', function() {
    'use strict';
    var app = window.app;
    describe('generateMessage', function() {
        it('should return number of vowel and false ', function() {
            expect(app.generateMessage("aabbnn")).toEqual({
                vowel: 2,
                palindrome: false
            });
        });
        it('should return number of vowel and true', function() {
            expect(app.generateMessage("anna")).toEqual({
                vowel: 2,
                palindrome: true
            });
        });
        var tekst = app.generateMessage("kajak");
        it('should return number of vowel and true ', function() {
            expect(tekst.vowel).toEqual(2);
            expect(tekst.palindrome).toEqual(true);
        });
        it('should throw exception', function() {
            expect(function() {
                app.generateMessage("");
            }).toThrow(new Error('Empty string!'));
        });
    });
    describe('isPalindrome', function() {
        describe('toHaveBeenCalled', function() {
            beforeAll(function() {
                spyOn(app, 'isPalindrome');
                app.isPalindrome('abba');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('abba');
            });
        });
        describe('and.callThrough', function() {
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('ikarlapalraki');
            });
            it('should call isPalindrome function when generateMessage is call', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ikarlapalraki');
            });
        });
        describe('and.returnValue', function() {
            var testowe;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome and return true', function() {
                testowe = app.isPalindrome('ghjklmmlkjhg');
                expect(testowe).toBe(true);
            });
            it('should call generateMessage and isPalindrome should return true', function() {
                testowe = app.generateMessage('aghjklmmlkjhga');
                expect(testowe).toEqual({
                    vowel: 2,
                    palindrome: true
                });
            });
        });
        describe('and.callFake', function() {
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callFake(function() {
                    return 'FAKE isPalindrome FUNCTION'
                });
            });
            it('should call isPalindrome fake function', function() {
                expect(app.isPalindrome('aszd')).toEqual('FAKE isPalindrome FUNCTION');
            });
            it('should notice isPalindrome called second time when generateMessage called', function() {
                expect(app.generateMessage('ala')).toEqual({
                    vowel: 2,
                    palindrome: 'FAKE isPalindrome FUNCTION'
                });
            });
        });
        it('should call isPalindrome fake function', function() {
            testoweFake = app.isPalindrome('onarysylysyrano');
            expect(testoweFake).toBe(false);
        });
        it('should call generateMessage and isPalindom fake function', function() {
            testoweFake = app.generateMessage('onarysylysyrano');
            expect(testoweFake).toEqual({
                vowel: 8,
                palindrome: false
            });
        });
    });
    describe('calls.count()', function() {
        var returns;
        beforeAll(function() {
            spyOn(app, 'isPalindrome').and.callThrough();
        });
        it('should call isPalindrome function', function() {
            returns = app.isPalindrome('ala');
            expect(app.isPalindrome.calls.count()).toBe(1);
        });
        it('should notice isPalindrome called second time when generateMessage called', function() {
            returns = app.generateMessage('yoloy');
            expect(app.isPalindrome.calls.count()).toBe(2);
        });
    });
});
describe('vowelCount', function() {
describe('toHaveBeenCalled', function() {
    beforeAll(function() {
        spyOn(app, 'vowelCount');
        app.vowelCount('ala');
    });
    it('should call vowelCount function', function() {
        expect(app.vowelCount).toHaveBeenCalled();
    });
});
describe('and.callThrough', function() {
    beforeAll(function() {
        spyOn(app, 'vowelCount').and.callThrough();
        app.generateMessage('kajak');
    });
    it('should call vowelCount and vowelCount functions when generateMessage function is called', function() {
        expect(app.vowelCount).toHaveBeenCalled();
        expect(app.vowelCount).toHaveBeenCalledWith('kajak');
    });
});
describe('and.returnValue', function() {
    var returns;
    beforeAll(function() {
        spyOn(app, 'vowelCount').and.returnValue(2);
    });
    it('should call generateMessage and return value {2, true}', function() {
        returns = app.generateMessage('zaraz');
        expect(returns).toEqual({
            vowel: 2,
            palindrome: true
        });
    });
    it('should call vowelCount and should return 2', function() {
        returns = app.vowelCount('zaraz');
        expect(returns).toEqual(2);
    });
});
describe('and.callFake', function() {
    beforeAll(function() {
        spyOn(app, 'vowelCount').and.callFake(function() {
            return 99999;
        });
    });
    it('should return vowelCount with 99999', function() {
        expect(app.vowelCount('aszd')).toEqual(99999);
    });
    it('should notice vowelCount called second time when generateMessage called', function() {
        expect(app.generateMessage('ala')).toEqual({
            vowel: 99999,
            palindrome: true
        });
    });
});
describe('calls.count()', function() {
    var returns;
    beforeAll(function() {
        spyOn(app, 'vowelCount').and.callThrough();
    });
    it('should call vowelCount function', function() {
        returns = app.vowelCount('ala');
        expect(app.vowelCount.calls.count()).toBe(1);
    });
    it('should notice vowelCount called second time when generateMessage called', function() {
        returns = app.generateMessage('yoloy');
        expect(app.vowelCount.calls.count()).toBe(2);
    });
    it('should notice vowelCount called third time when generateMessage is called second time', function() {
        returns = app.generateMessage('anna');
        expect(app.vowelCount.calls.count()).toBe(2);
    });
});
});
});