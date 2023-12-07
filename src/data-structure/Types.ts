/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import type { SORTBY, FILTERBY, NOTIFICATIONS } from './Enums';

export type SortByTypes = SORTBY.NameAsc | SORTBY.NameDesc | SORTBY.OfficeAsc | SORTBY.OfficeDesc;

export type FilterByTypes = FILTERBY.Name | FILTERBY.Office;

export type NotificationTypes =
  | NOTIFICATIONS.Info
  | NOTIFICATIONS.Error
  | NOTIFICATIONS.Success
  | NOTIFICATIONS.Warning;
