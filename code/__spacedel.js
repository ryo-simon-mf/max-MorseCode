var outstr = "";

function bang()
{
    outlet(0,outstr);

}
function anything()
{
    var inputstr = String(arrayfromargs(messagename, arguments));
    outstr = inputstr.replace(/,/g, '');
    bang();
}