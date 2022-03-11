'use strict';
import { Tree } from '../tree.mjs';
import { expect, assert } from 'chai';

describe('Binary Tree', () => {

    it('should have an insertValue function', () => {
        expect((new Tree()).insertValue).to.be.instanceof(Function);
    });

    it('should have a preorder function', () => {
        expect((new Tree()).preorder).to.be.instanceof(Function);
    });

    it('should have a inorder function', () => {
        expect((new Tree()).inorder).to.be.instanceof(Function);
    });

    it('should have a postorder function', () => {
        expect((new Tree()).postorder).to.be.instanceof(Function);
    });

    describe('with simple comparator function', () => {
        let tree;

        beforeEach(() => {
            tree = new Tree((a,b) => a < b);
        });

        afterEach(() => {
            tree = null;
        });

        describe('upon creation', () => {
            
            it('correctly instantiates an instance', () => {
                expect(tree).to.exist;
            });

            it('sets a root node when the first item is added', () => {
                expect(tree.root).to.not.exist;
                tree.insertValue(50);
                expect(tree.root).to.exist;
            });

            it('root node doesn\'t have any children', () => {
                tree.insertValue(50);
                expect(tree.root.left).to.not.exist;
                expect(tree.right).to.not.exist;
            })
        });

        describe('after creation', () => {

            beforeEach(() => {
                tree.insertValue(50);
                tree.insertValue(75);
                tree.insertValue(25);
                tree.insertValue(90);
                tree.insertValue(30);
                tree.insertValue(80);
                tree.insertValue(15);
                tree.insertValue(10);
                tree.insertValue(85);
            });

            /** 
             * tree should look like this after the values are inserted:
             *                       50 <-- root node
             *                      /  \
             *                    25    75
             *                   /  \     \
             *                 15    30    90
             *                /           /
             *              10          80
             *                            \
             *                             85
             */

            it('contains the nodes in correct order', () => {
                expect(tree.root.left.value).to.equal(25);
                expect(tree.root.right.right.left.value).to.equal(80);
            });
        });

        describe('traverses', () => {
            var arr;
            
            beforeEach(() => {
                tree.insertValue(50);
                tree.insertValue(75);
                tree.insertValue(25);
                tree.insertValue(90);
                tree.insertValue(80);
                tree.insertValue(15);
                tree.insertValue(10);
                tree.insertValue(85);
                tree.insertValue(30);
                tree.insertValue(100);

                arr = [];
            }) ;

            /** 
             * tree should look like this after the values are inserted:
             * 
             *                       50 <-- root node
             *                      /  \
             *                    25    75
             *                   /  \    \
             *                 15    30   90
             *                 /         /  \
             *               10        80    100
             *                           \
             *                            85
             */

            it('pre-order correctly', () => {
                expect(arr).to.be.empty;

                for (let v of tree.preorder()) {
                    arr.push(v);
                }

                // order should be [ 50, 25, 15, 10, 30, 75, 90, 80, 85, 100 ]

                expect(arr).to.have.length(10);
                expect(arr[0]).to.equal(50);
                expect(arr[3]).to.equal(10);
                expect(arr[9]).to.equal(100);
            });

            it('in-order correctly', () => {
                expect(arr).to.be.empty;

                for (let v of tree.inorder()) {
                    arr.push(v);
                }

                // order should be [ 10, 15, 25, 30, 50, 75, 80, 85, 90, 100 ]

                expect(arr).to.have.length(10);
                expect(arr[0]).to.equal(10);
                expect(arr[3]).to.equal(30);
                expect(arr[9]).to.equal(100);
            });

            it('post-order correctly', () => {
                expect(arr).to.be.empty;

                for (let v of tree.postorder()) {
                    arr.push(v);
                }

                // order should be [ 10, 15, 30, 25, 85, 80, 100, 90, 75, 50 ]

                expect(arr).to.have.length(10);
                expect(arr[0]).to.equal(10);
                expect(arr[3]).to.equal(25);
                expect(arr[9]).to.equal(50);
            })
        })
    });

    describe('with custom object and comparator function', () => {
        let tree;

        beforeEach(() => {
            tree = new Tree((a,b) => a.age < b.age);
        });

        afterEach(() => {
            tree = null;
        });

        describe('upon creation', () => {
            
            it('correctly instantiates an instance', () => {
                expect(tree).to.exist;
            });

            it('sets a root node when the first item is added', () => {
                expect(tree.root).to.not.exist;
                tree.insertValue({
                    name: 'Father',
                    age: 49
                });
                expect(tree.root).to.exist;
            });

            it('root node doesn\'t have any children', () => {
                tree.insertValue({
                    name: 'Father',
                    age: 49
                });
                expect(tree.root.left).to.not.exist;
                expect(tree.right).to.not.exist;
            })
        });

        describe('after creation', () => {

            beforeEach(() => {
                tree.insertValue({
                    name: 'Father',
                    age: 49
                });
                tree.insertValue({
                    name: 'Grandma',
                    age: 76
                });
                tree.insertValue({
                    name: 'Son',
                    age: 24
                });
                tree.insertValue({
                    name: 'Grandpa',
                    age: 89
                });
                tree.insertValue({
                    name: 'Mother',
                    age: 43
                });
                tree.insertValue({
                    name: 'Daughter',
                    age: 15
                });
            });

            /** 
             * tree should look like this after the values are inserted:
             *                       Father <-- root node
             *                      /      \
             *                    Son    Grandma
             *                   /   \        \
             *            Daughter  Mother    Grandpa
             */

            it('contains the nodes in correct order', () => {
                expect(tree.root.left.value.name).to.equal('Son');
                expect(tree.root.right.right.value.name).to.equal('Grandpa');
            });
        });

        describe('traverses', () => {
            var arr;
            
            beforeEach(() => {
                tree.insertValue({
                    name: 'Father',
                    age: 49
                });
                tree.insertValue({
                    name: 'Grandma',
                    age: 76
                });
                tree.insertValue({
                    name: 'Son',
                    age: 24
                });
                tree.insertValue({
                    name: 'Grandpa',
                    age: 89
                });
                tree.insertValue({
                    name: 'Mother',
                    age: 43
                });
                tree.insertValue({
                    name: 'Daughter',
                    age: 15
                });

                arr = [];
            });

            /** 
             * tree should look like this after the values are inserted:
             *                       Father <-- root node
             *                      /      \
             *                    Son    Grandma
             *                   /   \        \
             *            Daughter  Mother    Grandpa
             */

            it('pre-order correctly', () => {
                expect(arr).to.be.empty;

                for (let v of tree.preorder()) {
                    arr.push(v);
                }

                // order should be [ Father, Son, Daughter, Mother, Grandma, Grandpa ]

                expect(arr).to.have.length(6);
                expect(arr[0].name).to.equal('Father');
                expect(arr[3].name).to.equal('Mother');
                expect(arr[5].name).to.equal('Grandpa');
            });

            it('in-order correctly', () => {
                expect(arr).to.be.empty;

                for (let v of tree.inorder()) {
                    arr.push(v);
                }

                // order should be [ Daughter, Son, Mother, Father, Grandma, Grandpa ]

                expect(arr).to.have.length(6);
                expect(arr[0].name).to.equal('Daughter');
                expect(arr[3].name).to.equal('Father');
                expect(arr[5].name).to.equal('Grandpa');
            });

            it('post-order correctly', () => {
                expect(arr).to.be.empty;

                for (let v of tree.postorder()) {
                    arr.push(v);
                }

                // order should be [ Daughter, Mother, Son, Grandpa, Grandma, Father ]

                expect(arr).to.have.length(6);
                expect(arr[0].name).to.equal('Daughter');
                expect(arr[3].name).to.equal('Grandpa');
                expect(arr[5].name).to.equal('Father');
            })
        })
    });
});