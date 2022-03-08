/**
 * \brief Uk�zkov� skript pro prvn� projekt p�edm�tu WAP
 */

/// Vyu�ijeme knihovnu, kter� je p�edm�tem zad�n� projektu
import { Tree } from "./tree.mjs";

/// Testovac� data, samoz�ejm� jde jen o p��klad a pro fin�ln�
/// hodnocen� lze o�ek�vat vyu�it� jin�ch dat
let input = [5,7,2131345646,9,4,13,12415486];

/// Knihovna mus� poskytovat konstruktor Tree()
/// Tento konstruktor o�ek�v� jedin� parametr - �ad�c� fukci, kter�
/// vyhodnocuje, do kter�ho podstromu p�idat novou hodnotu
let t = new Tree((a,b) => a < b);
/// Objekty vytvo�en� konstruktorem Tree() mus� implementovat metodu
/// insertValue(). Ta o�ek�v� jedin� parametr - nov� p�id�vanou hodnotu.
input.forEach(i => t.insertValue(i));

/// Uk�zka pou�it� knihovny:
/// Iter�tor�  vr�cen�ch gener�tory preorder(), inorder() a postorder() je
/// mo�n� vytvo�it v�ce, vz�jemn� budou na sob� nez�visl�. P�edpokl�dejte,
/// �e v pr�b�hu iterace nebudou vkl�d�ny nov� prvky.
console.log("Mix 2 iter�tor�")
let pre1 = t.preorder()
console.log(pre1.next().value);
console.log(pre1.next().value);
let pre2 = t.preorder()
console.log(pre2.next().value);
console.log(pre1.next().value);
console.log(pre2.next().value);
console.log(pre2.next().value);
console.log(pre1.next().value);

/// Uk�zka vyu�it� iter�toru z�skan�ho z gener�toru preorder()
console.log("preorder")
for (let n of t.preorder()) {
	console.log(n);
}
/// Uk�zka vyu�it� iter�toru z�skan�ho z gener�toru inorder()
console.log("inorder")
for (let n of t.inorder()) {
	console.log(n);
}
/// Uk�zka vyu�it� iter�toru z�skan�ho z gener�toru postorder()
console.log("postorder")
for (let n of t.postorder()) {
	console.log(n);
}
