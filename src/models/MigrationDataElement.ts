import {
  ModelOptions,
  ModelAttributes,
  Sequelize,
  STRING,
  BOOLEAN,
  BIGINT,
  DATE
} from 'sequelize';

const tableName = 'Migrationdataelements';

const fields: ModelAttributes = {
  productId: BIGINT,
  migrationId: BIGINT,
  facilityId: BIGINT,
  value: BIGINT,
  dataElementCode: STRING,
  organizationUnitCode: STRING,
  isProcessed: BOOLEAN,
  migratedAt: DATE,
  reportingPeriod: STRING,
  createdAt: DATE,
};

const options: ModelOptions = {
  freezeTableName: true,
  tableName,
  timestamps: false,
};

export const createMigrationDataElementModel = async (
  sequelize: Sequelize
  // tslint:disable-next-line: no-any
): Promise<any> => await sequelize.define(tableName, fields, options);
