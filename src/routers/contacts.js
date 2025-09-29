import { Router } from 'express';

import { getContactsByIdController, getContactsController, createContactController, patchContactController, deleteContactController } from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidID.js';
import { contactSchema, updateContactSchema } from '../validation/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId',
    isValidId,
    ctrlWrapper(getContactsByIdController)
);

router.post('/contacts',
    validateBody(contactSchema),
    ctrlWrapper(createContactController)
);

router.patch('/contacts/:contactId',
    validateBody(updateContactSchema),
    isValidId,
    ctrlWrapper(patchContactController)
);

router.delete('/contacts/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController)
);

export default router;