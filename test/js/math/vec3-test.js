'use strict';

import Vec3 from '../../../src/math/vec3.js';

export default class Vec3Test {

	static runAll() {
		console.log(`%c----- Testing src/math/vec3.js -----`,'color:blue;');
		console.time('Perf');

		Vec3Test.testDefaultConstruction();
		Vec3Test.testIdentityConstruction();
		Vec3Test.testArrayConstruction();
		Vec3Test.testZeroAssignement();
		Vec3Test.testRandomAssignement();
		Vec3Test.testSetters();
		Vec3Test.testIdentity();
		Vec3Test.testCopy();
		Vec3Test.testCloning();
		Vec3Test.testNullLength();
		Vec3Test.testUnitLength();
		Vec3Test.testNormalize();
		Vec3Test.testNegate();
		Vec3Test.testInverse();
		Vec3Test.testNullInverse();
		Vec3Test.testNullScaling();
		Vec3Test.testZeroScaling();
		Vec3Test.testIdentityScaling();
		Vec3Test.testMultiply();

		console.timeEnd('Perf');
		console.log(`%c------------------------------------`,'color:blue;');
		console.log('\n');
	}

	static testDefaultConstruction() {
		const v = new Vec3();
		console.assert(v.x == 0.0 && v.y == 0.0 && v.z == 0.0, 'Default construction does not return a null vector.');
	}

	static testIdentityConstruction() {
		const v = Vec3.identity();
		console.assert(v.x == 1.0 && v.y == 1.0 && v.z == 1.0, 'Identity construction does not return an vector set to identity.');
	}

	static testArrayConstruction() {
		const x = Math.random();
		const y = Math.random();
		const z = Math.random();
		const v = Vec3.fromArray([x, y, z]);
		console.assert(v.x == x && v.y == y && v.z == z, 'Assigned array construction failed.');
	}

	static testZeroAssignement() {
		const v = new Vec3(0.0, 0.0, 0.0);
		console.assert(v.x == 0.0 && v.y == 0.0 && v.z == 0.0, 'Assigned construction (zeroes) failed.');
	}

	static testRandomAssignement() {
		const x = Math.random();
		const y = Math.random();
		const z = Math.random();
		const v = new Vec3(x,y,z);
		console.assert(v.x == x && v.y == y && v.z == z, 'Assigned construction failed.');
	}

	static testSetters() {
		const x = Math.random();
		const y = Math.random();
		const z = Math.random();
		const v = new Vec3();
		v.x = x;
		v.y = y;
		v.z = z;
		console.assert(v.x == x && v.y == y && v.z == z, 'Setters do not assign properly.');
	}

	static testIdentity() {
		const v = new Vec3();
		v.identity();
		console.assert(v.x == 1.0 && v.y == 1.0 && v.z == 1.0, 'Identity does not set to identity.');
	}

	static testCopy() {
		const v = Vec3.random();
		const v$copy = Vec3.random();
		v$copy.copy(v);
		console.assert(v$copy.equals(v), 'Copy failed.');
	}

	static testCloning() {
		const v = Vec3.random();
		const v$clone = v.clone();
		console.assert(v.equals(v$clone), 'Cloning failed.');
	}

	static testNullLength() {
		const v = new Vec3();
		console.assert(v.length() == 0.0, 'Length of a null vector is different from zero.');
	}

	static testUnitLength() {
		const vx = new Vec3(1.0, 0.0, 0.0);
		const vy = new Vec3(0.0, 1.0, 0.0);
		const vz = new Vec3(0.0, 0.0, 1.0);
		console.assert(vx.length() == 1.0, 'Length of a unit vector x is different from one.');
		console.assert(vy.length() == 1.0, 'Length of a unit vector y is different from one.');
		console.assert(vz.length() == 1.0, 'Length of a unit vector z is different from one.');
	}

	static testNormalize() {
		const v = Vec3.random();
		v.normalize();
		console.assert(Math.abs(v.length() - 1.0) <= Number.EPSILON, 'Length of the normalized vector is different from one.');
	}

	static testNegate() {
		const v = Vec3.random();
		const nx = -v.x;
		const ny = -v.y;
		const nz = -v.z;
		v.negate();
		console.assert(v.x == nx && v.y == ny && v.z == nz, 'Negation failed.');
	}

	static testInverse() {
		const v = Vec3.random();
		const ix = 1.0 / v.x;
		const iy = 1.0 / v.y;
		const iz = 1.0 / v.z;
		v.inverse();
		console.assert(v.x == ix && v.y == iy && v.z == iz, 'Inversion failed.');
	}

	static testNullInverse() {
		const v = new Vec3();
		v.inverse();
		console.assert(v.x == Infinity && v.y == Infinity && v.z == Infinity, 'Inverting a null vector does not return an Infinity vector.');
	}

	static testNullScaling() {
		const v = new Vec3();
		v.scale(Math.random());
		console.assert(v.x == 0.0 && v.y == 0.0 && v.z == 0.0, 'Scaling a null vector by random scalar does not return a null vector.');
	}

	static testZeroScaling() {
		const v = Vec3.random();
		v.scale(0.0);
		console.assert(v.x == 0.0 && v.y == 0.0 && v.z == 0.0, 'Scaling a random vector by zero does not return a null vector.');
	}

	static testIdentityScaling() {
		const v = new Vec3();
		const s = Math.random();
		v.identity();
		v.scale(s);
		console.assert(v.x == s && v.y == s && v.z == s, 'Scaling identity failed.');
	}

	static testMultiply() {
		const v$1 = Vec3.random();
		const v$2 = Vec3.random();
		const mx = v$1.x * v$2.x;
		const my = v$1.y * v$2.y;
		const mz = v$1.z * v$2.z;
		v$1.multiply(v$2);
		console.assert(v$1.x == mx && v$1.y == my && v$1.z == mz, 'Multiplication failed.');
	}
}

