//credit goes to Steven Frank of Butt to Butt (https://github.com/panicsteve/butt-to-butt/)

walk(document.body);

function walk(node)  
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bwater\b/g, "wine");
	v = v.replace(/\bWater\b/g, "Wine");
	v = v.replace(/\bvegetables\b/g, "breads");
	v = v.replace(/\bvegetable\b/g, "bread");
	v = v.replace(/\bVegetable\b/g, "Bread");
	v = v.replace(/\bvegetarian\b/g, "breadatarian");
	v = v.replace(/\bveggie\b/g, "bready");
	v = v.replace(/\bfruit\b/g, "cheese");
	v = v.replace(/\bFruit\b/g, "Cheese");
	v = v.replace(/\bFruits\b/g, "Cheeses");
	v = v.replace(/\bfruits\b/g, "cheeses");

	textNode.nodeValue = v;
}