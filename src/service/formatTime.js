export default {
    format:function(time,format='YYYY-MM-DD') {
        let _time = time.toString().length!== 13 ? time*1000 : time;
        _time = new Date(_time);
        let _res = '';
        let _years = _time.getFullYear(),
            _month = _time.getMonth() + 1,
            _date = _time.getDate(),
            _hour = _time.getHours(),
            _minute = _time.getMinutes(),
            _second = _time.getSeconds();

        function towNum(num){
            return  num.toString().length === 1? '0'+num.toString() : num;
        }
        switch (format){
            case 'YYYY-MM-DD':
                _res = _years + '-' + towNum(_month) + '-' +towNum(_date);
                
            case 'YYYY-MM-DD HH:MM:SS':
                _res += ' ' + towNum(_hour) +':' + towNum(_minute)+':' + towNum(_second);
                break;
        }
        return _res;
    }
}