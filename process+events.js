function Event(title,datetime,location,map)
{
	this.title=title;
	this.datetime=new Date(datetime);
	this.location=location;
	this.map=map;
}

function processEvents()
{
	var title;
	var datetime;
	var location;
	var eventslist=new Array();
	var xmldocument=oReq.responseXML;
	var i=0;
	var eventlength=xmldocument.getElementsByTagName("event");
	var length1=eventlength.length;
	var events=xmldocument.documentElement;

	for(i=0;i<length1;i++)
	{
		var events=xmldocument.documentElement;
		var title1=eventlength[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		var datetime1=eventlength[i].getElementsByTagName("datetime")[0].firstChild.nodeValue;
		var temp=eventlength[i].getElementsByTagName("location")[0].firstChild;
		if(temp!=null)
		{
			var location=eventlength[i].getElementsByTagName("location")[0].firstChild.nodeValue;
	
		}
		else
		{
			var location="";
		}
		var map=eventlength[i].getElementsByTagName("map")[0].firstChild;
		if(map!=null)
		{
			var map=eventlength[i].getElementsByTagName("map")[0].firstChild.nodeValue;
		}
		else
		{
			var map="";
		}
		var e=new Event(title1,datetime1,location,map);
		eventslist.push(e);
	}
	
	collectEvents(eventslist);
		var myTable;
		var orderArrayHeader = ["Title","Date","Location"];
		myTableDiv=document.getElementById("cal");
		var table = document.createElement('TABLE');
		table.border='1';
		var thead = document.createElement('thead');
		table.appendChild(thead);
			for(var i=0;i<orderArrayHeader.length;i++)
			{
				thead.appendChild(document.createElement("th")).
				appendChild(document.createTextNode(orderArrayHeader[i]));
			}
		var tableBody = document.createElement('TBODY');
		table.appendChild(tableBody);
      
    for (var j=0; j<eventslist.length; j++)
	{

		var tr = document.createElement('TR');
		tableBody.appendChild(tr);
		var td = document.createElement('TD');
		td.appendChild(document.createTextNode(eventslist[j].title));
        tr.appendChild(td);
		   
		var td = document.createElement('TD');
        td.appendChild(document.createTextNode(eventslist[j].datetime));
        tr.appendChild(td);
		   
		var td = document.createElement('TD');
        td.appendChild(document.createTextNode(eventslist[j].location));
        tr.appendChild(td);
       
    }
    myTableDiv.appendChild(table);
}

function collectEvents(eventslist)
{
	eventslist.sort(compareDates);
}

function compareDates(a,b)
{
	var adate = a.datetime;
	var bdate = b.datetime;
	if(adate>bdate)
		return 1;
	if(adate<bdate)
		return -1;
	return 0;
}

