import fastify from 'fastify'
import cors from '@fastify/cors'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { createTrip } from './routes/tripRoutes/create-trip';
import { confirmTrip } from './routes/tripRoutes/confirm-trip';
import { confirmParticipant } from './routes/participantRoutes/confirm-participant';
import { createActivity } from './routes/activityRoutes/create-activity';
import { getActivities } from './routes/activityRoutes/get-activity';
import { createLink } from './routes/linkRoutes/create-link';
import { getLinks } from './routes/linkRoutes/get-link';
import { getParticipants } from './routes/participantRoutes/get-participants';
import { createInvite } from './routes/inviteRoutes/create-invite';
import { updateTrip } from './routes/tripRoutes/update-trip';
import { getTripDetails } from './routes/tripRoutes/get-trip-details';
import { getParticipant } from './routes/participantRoutes/get-participant';
import { errorHandler } from './error-handler';
import { env } from '../env';

const app = fastify()

app.register(cors, {
  origin: '*',
})

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)


app.listen({ port: env.PORT }).then(() => {
  console.log('Server running on port 3333🚀🚀');
  
})