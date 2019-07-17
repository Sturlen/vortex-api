import { Normalize } from './getNormalizeFunc';
import * as Promise from 'bluebird';
/**
 * count the elements in an array for which the predicate matches
 *
 * @export
 * @template T
 * @param {T[]} container
 * @param {(value: T) => boolean} predicate
 * @returns {number}
 */
export declare function countIf<T>(container: T[], predicate: (value: T) => boolean): number;
/**
 * calculate the sum of the elements of an array
 *
 * @export
 * @param {number[]} container
 * @returns {number}
 */
export declare function sum(container: number[]): number;
/**
 * like the python setdefault function:
 * returns the attribute "key" from "obj". If that attribute doesn't exist
 * on obj, it will be set to the default value and that is returned.
 */
export declare function setdefault<T>(obj: any, key: PropertyKey, def: T): T;
/**
 * An ellipsis ("this text is too lo...") function. Usually these
 * functions clip the text at the end but often (i.e. when
 * clipping file paths) the end of the text is the most interesting part,
 * so this function clips the middle part of the input.
 * @param input the input text
 * @param maxLength the maximum number of characters (including ...)
 * @return the shortened text
 */
export declare function midClip(input: string, maxLength: number): string;
/**
 * test if a string is null, undefined or consists only of whitespaces
 * @param {string} check the string to check
 */
export declare function isNullOrWhitespace(check: string): boolean;
/**
 * return whether the specified value is "truthy" (not one of
 * these: undefined, null, 0, -0, NaN "")
 *
 * Obviously one could just do "if (val)" but js noobs
 * may not be aware what values that accepts exactly and whether that was
 * intentional. This is more explicit.
 */
export declare function truthy(val: any): boolean;
/**
 * return the delta between two objects
 * @param lhs the left, "before", object
 * @param rhs the right, "after", object
 */
export declare function objDiff(lhs: any, rhs: any, skip?: string[]): any;
/**
 * create a "queue".
 * Returns an enqueue function such that that the callback passed to it
 * will be called only after everything before it in the queue is finished
 * and with the promise that nothing else in the queue is run in parallel.
 */
export declare function makeQueue(): (func: () => Promise<any>, tryOnly: boolean) => Promise<{}>;
/**
 * spawn this application itself
 * @param args
 */
export declare function spawnSelf(args: string[]): void;
export declare function bytesToString(bytes: number): string;
export declare function pad(value: number, padding: string, width: number): string;
export declare function timeToString(seconds: number): string;
export declare function encodeHTML(input: string): string;
export declare function decodeHTML(input: string): string;
export declare function getAllPropertyNames(obj: object): string[];
/**
 * test if a directory is a sub-directory of another one
 * @param child path of the presumed sub-directory
 * @param parent path of the presumed parent directory
 */
export declare function isChildPath(child: string, parent: string, normalize?: Normalize): boolean;
/**
 * take any input string and sanitize it into a valid css id
 */
export declare function sanitizeCSSId(input: string): string;
/**
 * remove the BOM from the input string. doesn't do anything if there is none.
 */
export declare function deBOM(input: string): string;
/**
 * escape a string for use in a regular expression
 * @param string
 */
export declare function escapeRE(input: string): string;
/**
 * set a timeout for a promise. When the timeout expires the promise returned by this
 * resolves with a value of undefined.
 * @param prom the promise that should be wrapped
 * @param delay the time in milliseconds after which this should return
 * @param cancel if true, the input promise is canceled when the timeout expires. Otherwise
 *               it's allowed to continue and may finish after all.
 */
export declare function timeout<T>(prom: Promise<T>, delay: number, cancel?: boolean): Promise<T>;
/**
 * characters invalid in a file path
 */
declare const INVALID_FILEPATH_CHARACTERS: string[];
/**
 * characters invalid in a file name
 */
declare const INVALID_FILENAME_CHARACTERS: any[];
declare const INVALID_FILENAME_RE: RegExp;
export declare function isFilenameValid(input: string): boolean;
export declare function isPathValid(input: string, allowRelative?: boolean): boolean;
export { INVALID_FILEPATH_CHARACTERS, INVALID_FILENAME_RE, INVALID_FILENAME_CHARACTERS, };
