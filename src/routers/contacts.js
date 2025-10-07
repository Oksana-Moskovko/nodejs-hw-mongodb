import { Router } from 'express';

import { getContactsByIdController, getContactsController, createContactController, patchContactController, deleteContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidID.js';
import { contactSchema, updateContactSchema } from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get(
    '/:contactId',
    isValidId,
    ctrlWrapper(getContactsByIdController)
);

router.post(
    '/',
    validateBody(contactSchema),
    ctrlWrapper(createContactController)
);

router.patch(
    '/:contactId',
    validateBody(updateContactSchema),
    isValidId,
    ctrlWrapper(patchContactController)
);

router.delete(
    '/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController)
);

export default router;